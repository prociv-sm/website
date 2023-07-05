export default {
  title: 'Civil Protection',
  zone: 'Municipality of Settimo Milanese',
  area: 'Province of Milan',
  subtitle: 'Emergency management system',
  common: {
    username: 'Username',
    password: 'Password',
    back: 'Go back',
    noResults: 'No results',
    all: 'All',
    required: 'Required field',
    cancel: 'Abort',
    save: 'Save',
  },
  menu: {
    home: 'Home',
    login: 'Login',
    logout: 'Logout',
    about: 'About',
    vehicles: 'Vehicles',
    volunteer: 'Volunteers',
    alerts: 'Alerts',
  },
  vehicles: {
    title: 'Vehicles',
    noData: 'No vehicles available',
    add: 'Add vehicle',
    edit: 'Edit vehicle',
    delete: 'Delete vehicle',
    details: {
      brand: 'Brand',
      model: 'Model',
      bodyType: 'Type of vehicle',
      mileage: 'Mileage',
      productionYear: 'Production year',
    },
    type: {
      offroad: 'Off-road',
      truck: 'Trucks',
      trailer: 'Trailers',
      all: 'All'
    }
  },
  operations: {
    title: 'Operations',
    noData: 'No operations available',
    add: 'Create an operation',
    subtitle: 'Operation list',
    new: 'Add an operation',
    edit: 'Edit operation',
    delete: 'Delete operation',
    save: 'Save operation',
    cancel: 'Abort',
    fields: {
      title: 'Title',
      description: 'Description',
      location: 'Location',
      type: 'Type of operation',
      startDate: 'Start date',
      endDate: 'End date',
    },
    turnation: {
      active:'Night shift is active',
      inactive: 'Night shift is inactive',
      description: 'Squads at HQ from Monday to Friday, from 21.00 to 00.00',
    },
    type: {
      tecnical: 'Tecnical',
      fire: 'Fire',
      hydrogeological: 'Hydrogeological',
      covid: 'Covid support',
      landslide: 'Land slide',
      rescue: 'Rescue',
      event: 'Generic',
      other: 'Other'
    }
  },
  translation: {
    it: 'Italian',
    en: 'English'
  },
  squads: {
    title: 'Squads',
    active: 'Active squads',
    subtitle: 'Squad list',
    new: 'Create squad',
    edit: 'Edit squad',
    delete: 'Delete squad',
    save: 'Save squad',
    cancel: 'Abort',
  },
  about: {
    title: 'Discover more about us',
  },
  // Authentications pages
  auth: {
    login: {
      title: 'Login to your account',
      subtitle: 'Start managing your operations',
      button: 'Login',
      orsign: 'Or sign in with',
      forgot: 'Forgot your password?',
      noaccount: 'Don\'t have an account?',
      create: 'Create one here',
      error: 'Invalid credentials',
    }
  },
  users: {
    list: 'Users list',
    internal: {
      volunteer: 'Volunteer',
      supervisor: 'Supervisor',
      chief: 'Chief',
    }
  },
  alerts: {
    title: 'Alerts',
    active: 'Active alerts',
    type: {
      hydro: 'Hydraulic',
      storm: 'Storm',
      geo: 'Geo'
    },
    severity: {
      none: 'No active alerts',
      moderate: 'Yellow alert active',
      severe: 'Orange alert active',
    }
  },
  cookies: {
    title: 'Oh! We use cookies here!',
    description: 'We use cookies to provide our services and improve your experience. By clicking on "Accept all cookies", you agree to the use of all cookies.',
    accept: 'Accept all cookies',
    deny: 'Deny all cookies',
    type: {
      operative: {
        title: 'Operative cookies',
        description: 'These cookies are essential for the proper functioning of the website and cannot be deactivated.'
      }
    }
  },
  headquarters: {
    title: 'Headquarters',
    description: 'Our headquarters is located in Settimo Milanese, in the province of Milan.',
    address: 'Address',
    maps: 'Open in Google Maps',
    contacts: 'Contacts',
    phone: {
      title: 'Phone number',
      call: 'Call us',
      description: 'Information and requests number'
    },
    emergency: {
      title: 'Telefono',
      description: 'Emergency number'
    },
    email: 'Email',
    sendMail: 'Send us an email',
  },
  error: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved.',
  }
}
