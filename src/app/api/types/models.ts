
export interface User {
    color?: string;
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  
  export interface Player {
    id: number;
    gamerTag: string;
    points: number;
    rank: number;
  }
  
  export interface Particle {
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }
  