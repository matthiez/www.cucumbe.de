<template>
    <v-app dark>
        <v-toolbar fixed>
            <v-toolbar-title>
                <v-img src="LogowithMafia_Cucumbe.png" height="50"
                       width="50"></v-img>
            </v-toolbar-title>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat href="/">Home</v-btn>
                <v-btn flat href="/#about">Über Cucumbe</v-btn>
                <v-btn flat href="/#stream">Stream</v-btn>
                <v-btn flat href="/#youtube">YouTube</v-btn>
                <v-btn flat href="/#program">Programm</v-btn>
                <v-btn flat href="/#partner">Partner</v-btn>
                <v-btn flat to="contact">Kontakt</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down soc" style="    margin-top: 32px;">
                <a :key="social.name" v-for="social in socials"
                   :href="social.href"
                   :class="'soc-' + social.name.toLowerCase()"
                   :title="social.name"></a>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <nuxt class="mt-5"/>
        </v-content>

        <v-footer>
            <v-container fluid grid-list-xl class="black">
                <v-layout row wrap>
                    <v-flex xs6 md3>
                        <v-layout row wrap>
                            <v-flex xs6 md4>
                                <v-img src="Lovely_cucumber_FULL.png"></v-img>
                            </v-flex>

                            <v-flex xs6 md8>
                                <h3 class="text-uppercase">Cucumbe</h3>

                                <h4 class="text-uppercase">Streamer</h4>

                                <div class="soc">
                                    <a :key="social.name" v-for="social in socials"
                                       :href="social.href"
                                       :class="'soc-' + social.name.toLowerCase()"
                                       :title="social.name"></a>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-flex>

                    <v-flex hidden-xs-only md6></v-flex>

                    <v-flex xs6 md3 text-xs-center>
                        <h4 class="text-uppercase">© Copyright 2018 Cucumbe</h4>

                        <nuxt-link to="contact" class="white--text">Kontakt</nuxt-link>

                        <nuxt-link to="imprint" class="white--text">Impressum</nuxt-link>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                socials: [
                    {
                        name: 'Twitter',
                        href: 'http://twitter.cucumbe.de/',
                    },
                    {
                        name: 'Instagram',
                        href: 'http://insta.cucumbe.de/',
                    },
                    {
                        name: 'YouTube',
                        href: 'http://youtube.cucumbe.de/',
                    }
                ]
            };
        }
    };
</script>
