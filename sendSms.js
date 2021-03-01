'use strict';
require('dotenv').config();

// 環境変数から値を取得
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN,
        TWILIO_MESSAGING_SERVICE_SID, MY_PHONE_NUMBER } = process.env;


if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && 
    TWILIO_MESSAGING_SERVICE_SID && MY_PHONE_NUMBER) {
        // ここからコードを記述

} else {
    console.error('いくつかの情報が環境変数に未入力です。')
}