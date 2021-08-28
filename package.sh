mkdir package
cp -v LICENSE package.json README.md tsconfig.json sha512_224.ts package/
cd package
mkdir lib
cd ..
cp -v lib/sha512_224.js lib/sha512_224.d.ts lib/sha512_224.js.map package/lib
tar -czvf release.tar.gz package/*
