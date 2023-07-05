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
    about: 'Chi siamo',
    vehicles: 'Veicoli',
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
    subtitle: 'Elenco degli interventi',
    new: 'Aggiungi un\'intervento',
    edit: 'Modifica intervento',
    delete: 'Elimina intervento',
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
    turnation: {
      active:'Turnazione settimanale attiva',
      inactive: 'Turnazione settimanale non attiva',
      description: 'Squadra in sede dal Lunedì al Venerdì dalle 21:00 alle 24:00'
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
    fields: {
      name: 'Nome',
      surname: 'Cognome',
      username: 'Nome utente',
      email: 'Email',
      phone: 'Telefono',
      role: 'Ruolo',
      actions: 'Azioni'
    },
    list: 'Elenco utenti',
    internal: {
      volunteer: 'Volontario',
      supervisor: 'Referente di turno',
      chief: 'Coordinatore'
    },
    delete: 'Elimina utente',
    edit: 'Modifica utente',
  },
  alerts: {
    title: 'Allerte',
    active: 'Allerte attive',
    type: {
      hydro: 'Idraulico',
      storm: 'Temporali',
      geo: 'Idrogeologico'
    },
    severity: {
      none: 'Nessuna allerta attiva',
      moderate: 'Allerta gialla attiva',
      severe: 'Allerta rossa attiva'
    }
  },
  cookies: {
    title: 'Oh no! Utilizziamo i cookie su questo sito!',
    description: 'Utilizziamo cookie e strumenti simili (collettivamente "cookie") ai fini descritti in basso e applicheremo le tue preferenze relative ai cookie su questo dispositivo.',
    accept: 'Accetta tutti i cookie',
    deny: 'Rifiuta tutti i cookie',
    type: {
      operative: {
        title: 'Cookie operativi e utilizzo dei dati',
        description: 'I cookie operativi sono utilizzati per fornire i nostri servizi e non possono essere disabilitati.'
      }
    }
  },
  headquarters: {
    title: 'Sede',
    description: 'La sede della Protezione Civile di Settimo Milanese',
    address: 'Indirizzo',
    maps: 'Apri in Google Maps',
    contacts: 'Contatti utili',
    phone: {
      title: 'Telefono',
      call: 'Chiama',
      description: 'Numero per informazioni o non emergenze'
    },
    emergency: {
      title: 'Telefono',
      description: 'Numero per le emergenze'
    },
    email: 'Email',
    sendMail: 'Invia una mail'
  },
  error: {
    title: 'Forse non è qui!',
    description: 'Sembra che la pagina che stavi cercando non esista più o sia stata spostata!',
  }
}
