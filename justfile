sync:
  npx quartz sync

update:
  npx quartz update

serve port="8080":
  npx quartz build --serve --port {{port}}

cards:
  rsync -av --delete \
    --exclude-from=.gitignore \
    --exclude=.git/ \
    --exclude=*.mdx \
    ~/cards/ \
    ~/devbook/binary-biome/content/cards/
