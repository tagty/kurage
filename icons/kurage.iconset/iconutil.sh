cp icon_128@1x.png icon_64@2x.png
cp icon_64@2x.png icon_64@1x.png
sips -Z 64 icon_64@1x.png
cp icon_64@1x.png icon_32@2x.png
cp icon_32@2x.png icon_32@1x.png
sips -Z 32 icon_32@1x.png
cp icon_32@1x.png icon_16@2x.png
cp icon_16@2x.png icon_16@1x.png
sips -Z 16 icon_16@1x.png

iconutil -c icns .
