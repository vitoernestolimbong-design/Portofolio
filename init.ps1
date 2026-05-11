Remove-Item -Path "package.json" -ErrorAction SilentlyContinue
cmd.exe /c "npx -y create-next-app@latest portofolio-temp --typescript --tailwind --eslint --app --src-dir --import-alias `"@/*`" --use-npm --yes"
Move-Item -Path ".\portofolio-temp\*" -Destination "." -Force
Move-Item -Path ".\portofolio-temp\.*" -Destination "." -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\portofolio-temp" -Recurse -Force
