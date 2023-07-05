export default {
  jsonld() {
    const WEBSITE_URL = 'https://procivsettimomi.it'
    const DEFAULT_DESCRIPTION =
      'Sito ufficiale della Protezione Civile di Settimo Milanese'
    return {
      '@context': 'https://schema.org',
      '@type': this.seo.type === 'article' ? 'NewsArticle' : 'WebPage',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': WEBSITE_URL + this.$route.path,
      },
      headline: this.seo.title,
      description: this.seo.description || DEFAULT_DESCRIPTION,
      image: this.seo.image,
      author: {
        '@type': 'Person',
        name: this.seo.author || 'andreatombolato',
        url: 'https://andreatombolato.dev',
      },
      datePublished: this.seo.published,
      dateModified: this.seo.modified,
      publisher: {
        '@type': 'Organization',
        name: 'protezione civile settimo milanese',
        url: WEBSITE_URL,
      },
      maintainer: {
        '@type': 'Person',
        name: this.seo.author || 'andreatombolato',
        url: 'https://andreatombolato.dev',
      },
    }
  },
}
