#!/bin/bash
source ~/Desktop/Totem-Menu-V3/backend/env/bin/activate
python3 ~/Desktop/Totem-Menu-V3/backend/app.py &

while ! nc -z localhost 5000; do
	sleep 1
done

cd ~/Desktop/Totem-Menu-V3/frontend
npm run dev &
while ! nc -z localhost 5173; do
	sleep 1
done

google-chrome --noerrdialogs --disable-infobars --disable-translate --window-size=1920,1080 --kiosk http://127.0.0.1:5173
