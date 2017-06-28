<?php
// API access key from Google API's Console
define( 'API_ACCESS_KEY', 'AIzaSyD_m5RxnpZsft3KCQ12bU4ZwzBR2mjdgLY' );
$registrationIds = ['fZ1PsWJPrk4:APA91bE-YRBn0deBxWSNdx0rBy6poMguqLxwo08YGMXKYFz5TruKE1F4-0vBLfpz_lvTNPxjoI96zzhF1d6N0Y8dnDJmuqX2XZeV6c33xvqMPsCFkURYMBWq9xqldBABcHyMsOclLyS7'];
// prep the bundle
$msg = array
(
'message'=> 'here is a message. message',
'title'=> 'This is a title. title',
'subtitle'=> 'This is a subtitle. subtitle',
'tickerText'=> 'Ticker text here...Ticker text here...Ticker text here',
'largeIcon'=>'large_icon',
'smallIcon'=>'small_icon'
);
$fields = array
('registration_ids'=>$registrationIds,
'data'=>$msg
);

$headers = array
('Authorization: key=' . API_ACCESS_KEY,
'Content-Type: application/json'
);

$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );
echo $result;
?>