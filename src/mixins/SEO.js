export default {
  head() {
    const WEBSITE_URL = 'https://procivsettimomi.it'
    const DEFAULT_DESCRIPTION =
      'Sito ufficiale della Protezione Civile di Settimo Milanese'
    return {
      title: this.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo.description || DEFAULT_DESCRIPTION,
        },
        // OGP
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.seo.title + ' - Protezione Civile' || 'Protezione Civile - Settimo M.se',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Protezione Civile - Settimo M.se',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.seo.description || DEFAULT_DESCRIPTION,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.seo.type || 'website',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.seo.image,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.seo.image,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.seo.title + ' article image',
        },
        { hid: 'og:image:width', property: 'og:image:width', content: 1920 },
        { hid: 'og:image:height', property: 'og:image:height', content: 1080 },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'it_IT',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: WEBSITE_URL + this.$route.path,
        },
        {
          rel: 'canonical',
          content: WEBSITE_URL + this.$route.path,
        },
        // Twitter
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: WEBSITE_URL + this.$route.path,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.seo.title + ' - Protezione Civile' || 'Protezione Civile - Settimo M.se',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.seo.description || DEFAULT_DESCRIPTION,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.seo.image,
        },
        // Others
        {
          name: 'robots',
          content: this.seo.robots || 'index,follow',
        },
      ],
    }
  },
}
