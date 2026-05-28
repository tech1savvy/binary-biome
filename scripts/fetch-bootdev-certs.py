#!/usr/bin/env python3
"""Fetch Boot.dev profile and list completed courses with UUIDs and dates."""
import json, re, urllib.request

URL = "https://www.boot.dev/u/tech1savvy"


def main():
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0"})
    html = urllib.request.urlopen(req).read().decode()
    scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)

    payload = None
    for s in scripts:
        if 'courses:tech1savvy' in s:
            m = re.search(r'(\[\[.*\]\])', s, re.DOTALL)
            if m:
                payload = json.loads(m.group(1))
                break

    arr = payload
    def resolve(idx, depth=0):
        if depth > 20 or idx is None or idx < 0 or idx >= len(arr):
            return None
        v = arr[idx]
        if isinstance(v, (str, int, float, bool)) or v is None:
            return v
        if isinstance(v, list):
            if len(v) == 2 and isinstance(v[0], str):
                t, r = v
                if t in ("Reactive", "ShallowReactive", "Ref", "EmptyRef", "ShallowRef"):
                    return resolve(r, depth + 1) if isinstance(r, int) else None
                if t == "Set":
                    return None
            return [resolve(x, depth + 1) if isinstance(x, int) else x for x in v]
        if isinstance(v, dict):
            return {k: resolve(x, depth + 1) if isinstance(x, int) else x for k, x in v.items()}
        return v

    def val(v):
        return resolve(v) if isinstance(v, int) else v

    pinia = arr[3]
    ck = next(k for k in pinia if 'courses' in k)
    cd = resolve(pinia[ck])
    data = cd.get("data", cd) if isinstance(cd, dict) else cd
    refs = val(data["Courses"]) if isinstance(data, dict) else data

    courses = []
    for r in refs:
        c = resolve(r) if isinstance(r, int) else r
        if not isinstance(c, dict):
            continue
        uuid = val(c.get("CompletionUUID"))
        specific = val(c.get("Title"))
        at = val(c.get("CompletedAt"))
        if not uuid or not specific:
            continue
        date = at.split("T")[0] if at and "T" in str(at) else str(at or "")
        courses.append((date, uuid, specific))

    for date, uuid, title in sorted(courses):
        print(f"{uuid}  {title}  ({date})")


if __name__ == "__main__":
    main()
