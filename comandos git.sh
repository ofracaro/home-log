


https://github.com/ofracaro/home-log.git


# 1. Vinculá tu carpeta local con el repositorio vacío que creaste en GitHub
git remote add origin https://github.com/ofracaro/home-log.git

# 2. Asegurate de estar en la rama principal
git branch -M main

# 3. Sube el esqueleto inicial de Astro
git add .
git commit -m "Estructura inicial del home log."
git push -u origin main


git pull origin main --allow-unrelated-histories

git checkout --ours README.md


npx plugins add vercel/vercel-plugin

##cada subida

git add .
git commit -m "Esquema de datos, primer proyecto y Home estilo Vasari"
git push origin main

