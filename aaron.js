const axios = require('axios');
const mpdParser = require('./dist/mpd-parser.cjs');

(async () => {
    const manifestUri = "https://cdn-edge-networks-01.vos360.video/Content/DASH_ATSC30/CatchUp/channel(name=alt1-colo-7day-avcstaging,startTime=16498862380000000,endTime=16498862680000000)/manifest.mpd"
    // const manifestUri = "https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd";
    // const manifestUri='https://dash.akamaized.net/dash264/TestCasesIOP33/adapatationSetSwitching/5/manifest.mpd'
    // const manifestUri='https://dash.akamaized.net/dash264/TestCases/2c/qualcomm/1/MultiResMPEG2.mpd'
    // const manifestUri='https://dash.akamaized.net/dash264/TestCases/2c/qualcomm/1/MultiResMPEG2.mpd'
    // const manifestUri='https://dash.akamaized.net/dash264/TestCasesHD/2b/qualcomm/1/MultiResMPEG2.mpd'
    // const manifestUri='https://dash.akamaized.net/dash264/TestCases/1b/qualcomm/1/MultiRatePatched.mpd'

    // const manifestUri='https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd'
    // const manifestUri='http://ftp.itec.aau.at/datasets/DASHDataset2014/BigBuckBunny/2sec/BigBuckBunny_2s_onDemand_2014_05_09.mpd'
    // const manifestUri='http://media.developer.dolby.com/DolbyVision_Atmos/profile8.1_DASH/p8.1.mpd'

    const res = await axios.get(manifestUri);
    const parsedManifest = mpdParser.parse(res.data, { manifestUri });
    console.log(parsedManifest.playlists.length);
    // console.dir(parsedManifest, { depth: null, 'maxArrayLength': null });
    console.log(parsedManifest);
})();