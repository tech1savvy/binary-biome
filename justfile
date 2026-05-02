sync:
  npx quartz sync

update:
  npx quartz update

serve port="8080":
  npx quartz build --serve --port {{port}}

cards:
  rsync -av --delete ~/cards/devops/ ~/devbook/binary-biome/content/cards/devops/

