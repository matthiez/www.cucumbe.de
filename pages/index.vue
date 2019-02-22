<template>
    <div>
        <v-container id="intro" grid-list-xl fluid pa-0 fill-height>
            <v-layout row wrap align-center>
                <v-flex xs12 class="red pb-2 pt-4" text-xs-center>
                    <!--TODO https://github.com/vuetifyjs/vuetify/issues/5757-->
                    <img src="Cucumbe_HabbyLogo.png" alt=""/>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container id="about" grid-list-xl text-xs-center fluid fill-height class="white">
            <v-layout row wrap align-center class="black--text">
                <v-flex xs12 md8>

                    <h2 class="red--text text-uppercase">Wer ist Cucumbe?</h2>

                    <p>
                        Mein Name ist <span class="font-weight-bold">Lars</span>,
                        ich bin 30 Jahre jung und beschäftige mich mit dem Thema Gaming seit ich
                        ca 8 Jahre alt war.<br><br>

                        Das Logo / Motto vom Stream ist rund um die Gurke.<br>
                        Warum Gurke fragt ihr euch? Ich komme aus dem Spreewald und weil von
                        hier die guten Spreewaldgurken kommen habe ich das zum Motto
                        gemacht.<br><br>

                        Es passt einfach zu mir.<br><br>

                        Ich bin ein lustiger Mensch der gerne lacht und auch immer für Vieles zu
                        haben ist.<br><br>

                        Ich wünsche euch bei mir im Stream viel Spaß
                    </p>

                    <h3 class="red--text">Meine aktuellen Games</h3>

                    <p>
                        Marbles on Stream<br>
                        Cities Skyline<br>
                        CS:GO<br>
                        Destiny<br>
                        GTA<br>
                        und andere Community Games
                    </p>

                    <v-btn color="red" class="white--text" href="//twitch.cucumbe.de/">
                        <v-icon class="mr-1">fab fa-twitch</v-icon>
                        Zum Stream
                    </v-btn>
                </v-flex>

                <v-flex xs12 md4>
                    <v-img src="Cucumber_soldier_NORMAL_SIZE.png" alt=""></v-img>
                </v-flex>
            </v-layout>
        </v-container>

        <div id="stream">
            <div>
                <v-container fluid grid-list-xl text-xs-center fill-height>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md4>
                            <v-img src="twitch.png" alt="" title=""></v-img>
                        </v-flex>

                        <v-flex xs12 md8>
                            <h2 class="text-uppercase">Mein Twitch Stream</h2>

                            <h3 class="text-uppercase">Streamen ist mein Hobby.</h3>

                            <p>
                                Hier könnt hier Live Dabei sein wenn ich Streame.
                            </p>
                            <v-btn color="red" class="white--text"
                                   href="//twitch.cucumbe.de/">
                                <v-icon class="mr-1">fab fa-twitch</v-icon>
                                Zum Stream
                            </v-btn>
                        </v-flex>

                        <v-flex xs12>
                            <v-btn block outline>
                                Klicken für Stream
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
        </div>

        <v-container id="youtube" fluid grid-list-xl text-xs-center fill-height
                     class="red pt-5 pb-5">
            <v-layout row wrap align-center>
                <v-flex xs12 md8 order-xs2 order-md1>
                    <h2 class="text-uppercase">Mein YouTube Channel</h2>

                    <h3 class="text-uppercase">Ausschnitte von meine Letzten Streams</h3>

                    <p>
                        Dann schaut doch bei mir auf Youtube vorbei. Da werdet ihr immer die
                        Clips der Woche sehen und andere Sachen vom Stream oder von mir.
                    </p>

                    <v-btn outline class="white--text text-uppercase"
                           href="//youtube.cucumbe.de/">
                        <v-icon class="mr-1">fab fa-youtube</v-icon>
                        Zum Channel
                    </v-btn>
                </v-flex>

                <v-flex xs12 md4 order-xs1 order-md2>
                    <v-img src="youtube.png" alt="" title=""></v-img>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fluid id="program">
            <v-container grid-list-xl fill-height text-xs-center align-center>
                <v-layout row wrap>
                    <v-flex xs12>
                        <h2 class="text-uppercase red--text text-xs-center">My Schedule</h2>
                    </v-flex>

                    <v-flex xs12 md4 v-for="day in schedule" :key="day.name">
                        <v-card :class="day.class">
                            <v-btn flat icon>
                                <v-icon x-large>calendar_today</v-icon>
                            </v-btn>

                            <v-card-text>
                                <p>{{day.name}}</p>
                                <p>00:00 - 24:00</p>
                                <p>Zeiten steht noch nicht fest.</p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>

        </v-container>

        <v-container id="partner" fluid grid-list-xl text-xs-center fill-height
                     class="pb-5 pt-5 grey lighten-1">
            <v-layout row wrap>
                <v-flex xs3>
                    <v-img height="300" src="Cucumber_Jar3th_HAPPY.png" contain
                           alt="" title=""></v-img>
                </v-flex>

                <v-flex xs3>
                    <v-img height="300" src="Cucumber_Jar3th_SCARED.png" contain
                           alt="" title=""></v-img>
                </v-flex>

                <v-flex xs3>
                    <v-img height="300" src="Cucumber_Jar3th_SAD.png" contain
                           alt="" title=""></v-img>
                </v-flex>

                <v-flex xs3>
                    <v-img height="300" src="Cucumber_Jar3th_BROKEN_FULL.png" contain
                           alt="" title=""></v-img>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container id="outro" fluid grid-list-xl text-xs-center>
            <v-layout row wrap>
                <v-flex xs12>
                    <h2 class="text-xs-center red--text text-uppercase text">Mein Traum</h2>

                    <h3 class="text-xs-center text-uppercase">Full-time Streamer</h3>

                    <v-btn color="red" class="text-uppercase" href="//donate.cucumbe.de/">
                        <v-icon>thumb_up_alt</v-icon>
                        Supporten
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<style>
    h1 {
        font-family: 'Oswald', sans-serif;
        color: #ffffff;
        font-size: 72px;
        font-weight: 700;
        font-style: italic;
        line-height: 78px;
        margin-bottom: 2px;
    }

    #about p {
        font-family: 'Times New Roman', serif;
    }

    #intro img {
        max-width: 350px;
    }

    #outro {
        background-image: url(~static/bg-triangles-dark.jpg);
    }

    #program {
        background-color: #e5e5e5;
        background-image: url(~static/bg-triangles-dark.jpg);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
    }

    #stream {
        background-color: #6441a5;
        background-size: cover;
    }

    #stream > div {
        background-image: url(~static/akali_vs_baron.jpg);
    }

    #stream > div > div {
        background-color: rgba(100, 65, 165, 0.8);
    }
</style>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                schedule: [
                    {
                        name: 'Montag',
                        class: 'purple pt-4 pb-4'
                    },
                    {
                        name: 'Dienstag',
                        class: 'redd pt-4 pb-4'
                    },
                    {
                        name: 'Mittwoch',
                        class: 'purple pt-4 pb-4'
                    },
                    {
                        name: 'Donnerstag',
                        class: 'red pt-4 pb-4'
                    },
                    {
                        name: 'Freitag',
                        class: 'purple pt-4 pb-4'
                    },
                    {
                        name: 'Samstag',
                        class: 'red pt-4 pb-4'
                    },
                    {
                        name: 'Sonntag',
                        class: 'purple pt-4 pb-4'
                    },
                ]
            };
        }
    });
</script>
