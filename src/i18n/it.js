export default {
  title: 'Protezione Civile',
  zone: 'Comune di Settimo Milanese',
  area: 'Provincia di Milano',
  subtitle: 'Sistema di gestione delle emergenze',
  common: {
    username: 'Nome utente',
    password: 'Password',
    back: 'Indietro',
    noResults: 'Nessun risultato',
    all: 'Tutti',
    required: 'Campo obbligatorio',
    cancel: 'Annulla',
    save: 'Salva',
  },
  menu: {
    home: 'Home',
    login: 'Login',
    logout: 'Logout',
    activity: 'Interventi',
    about: 'Chi siamo',
    vehicles: 'Veicoli',
    headquarters: 'Sede',
    volunteer: 'Volontari',
    alerts: 'Allerte',
  },
  vehicles: {
    title: 'Veicoli',
    noData: 'Nessun veicolo disponibile',
    add: 'Aggiungi veicolo',
    edit: 'Modifica veicolo',
    delete: 'Elimina veicolo',
    details: {
      brand: 'Marca',
      model: 'Modello',
      bodyType: 'Tipo di veicolo',
      mileage: 'Chilometraggio',
      productionYear: 'Anno di produzione',
    },
    type: {
      offroad: 'Off-road',
      truck: 'Furgoni',
      trailer: 'Rimorchi',
      all: 'Tutti'
    }
  },
  operations: {
    title: 'Interventi',
    noData: 'Nessun intervento disponibile',
    add: 'Crea un\'intervento',
  },
  activity: {
    title: 'Interventi',
    subtitle: 'Elenco degli interventi',
    new: 'Aggiungi un\'intervento',
    edit: 'Modifica intervento',
    delete: 'Elimina intervento',
    noData: 'Nessun intervento disponibile',
    save: 'Salva intervento',
    cancel: 'Annulla',
    fields: {
      title: 'Titolo',
      description: 'Descrizione',
      location: 'Luogo',
      type: 'Tipologia di intervento',
      startDate: 'Data di inizio',
      endDate: 'Data di fine',
    },
    type: {
      tecnical: 'Tecnico',
      fire: 'Incendio',
      hydrogeological: 'Idrogeologico',
      covid: 'Ausilio Covid-19',
      landslide: 'Dissesto',
      rescue: 'Soccorso',
      event: 'Evento',
      other: 'Altro'
    }
  },
  translation: {
    it: 'Italiano',
    en: 'Inglese'
  },
  squads: {
    title: 'Squadre',
    active: 'Squadra in servizio',
    subtitle: 'Elenco delle squadre',
    new: 'Nuova squadra',
    edit: 'Modifica squadra',
    delete: 'Elimina squadra',
    save: 'Salva squadra',
    cancel: 'Annulla'
  },
  about: {
    title: 'Le attività della Protezione Civile',
  },
  // Authentications pages
  auth: {
    login: {
      title: 'Accedi al tuo account',
      subtitle: 'Accedi per iniziare a usare il nostro servizio',
      button: 'Accedi',
      orsign: 'Puoi connetterti anche con',
      forgot: 'Password dimenticata?',
      noaccount: 'Non hai un\'account?',
      create: 'Registrati!',
      error: 'I dati inseriti non sono corretti!'
    }
  },
  users: {
    internal: {
      volunteer: 'Volontario',
      supervisor: 'Referente di turno',
      chief: 'Coordinatore'
    }
  }
}
