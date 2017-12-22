savage.controller('musicCtrl', musicCtrl);

function musicCtrl() {
    Amplitude.init({
            "songs": [
                {
                    "name": "Emulator",
                    "artist": "The Crystal Method",
                    "album": "Emulator (Single)",
                    "url": "https://soundcloud.com/the-crystal-method/emulator",
                    "cover_art_url": "images/song_TheCrystalMethod-Emulator.jpg"
                },
                {
                    "name": "Symphonica (Thibault Remix)",
                    "artist": "Thibault",
                    "album": "Nicky Romero Remixes",
                    "url": "https://soundcloud.com/thibaultmusic/nicky-romero-symphonica",
                    "cover_art_url": "images/song_NickyRomero-SymphonicaThibaultRemix.jpg"
                },
                {
                    "name": "Burial feat. Pusha T",
                    "artist": "Yogi",
                    "album": "YOGI",
                    "url": "https://soundcloud.com/yogitrf/yogi-burial-feat-pusha-t",
                    "cover_art_url": "images/song_YogiBurial.jpg"
                }
            ],
            "soundcloud_client": '7f4a6ed1488c1ebdf31600767b9b6350',
            "default_album_art": "images/no-cover-large.png"
        });
        var expanded = false;
        var playlistEpxanded = false;
        /*
            jQuery Visual Helpers
        */
        $('#small-player').hover(function(){
            $('#small-player-middle-controls').show();
            $('#small-player-middle-meta').hide();
        }, function(){
            $('#small-player-middle-controls').hide();
            $('#small-player-middle-meta').show();
        });
        $('#top-large-album').hover(function(){
            $('#top-header').show();
            $('#small-player').show();
        }, function(){
            if( !$('#top-header').is(':hover') && !$('#small-player').is(':hover') ){
                $('#top-header').fadeOut(1000);
                $('#small-player').fadeOut(1000);
            }
        });
        $('#top-header').hover(function(){
            $('#top-header').show();
            $('#small-player').show();
        }, function(){
        });
        /*
            Toggles Album Art
        */
        $('#small-player-toggle').click(function(){
            $('.hidden-on-collapse').show();
            $('.hidden-on-expanded').hide();
            /*
                Is expanded
            */
            expanded = true;
            $('#small-player').css('border-top-left-radius', '0px');
            $('#small-player').css('border-top-right-radius', '0px');
        });
        $('#top-header-toggle').click(function(){
            $('.hidden-on-collapse').hide();
            $('.hidden-on-expanded').show();
            /*
                Is collapsed
            */
            expanded = false;
            $('#small-player').css('border-top-left-radius', '5px');
            $('#small-player').css('border-top-right-radius', '5px');
        });
        $('.playlist-toggle').click(function(){
            if( playlistEpxanded ){
                $('#small-player-playlist').hide();
                $('#small-player').css('border-bottom-left-radius', '5px');
                $('#small-player').css('border-bottom-right-radius', '5px');
                $('#large-album-art').css('border-bottom-left-radius', '5px');
                $('#large-album-art').css('border-bottom-right-radius', '5px');
                playlistEpxanded = false;
            }else{
                $('#small-player-playlist').show();
                $('#small-player').css('border-bottom-left-radius', '0px');
                $('#small-player').css('border-bottom-right-radius', '0px');
                $('#large-album-art').css('border-bottom-left-radius', '0px');
                $('#large-album-art').css('border-bottom-right-radius', '0px');
                playlistEpxanded = true;
            }
        })
}
