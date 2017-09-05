import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataMemory implements InMemoryDbService {

  createDb() {

    let data = [
      {
        ean: 1001,
        name: "PHOTOSMART",
        description: "Point and shoot simplicity in a 4 MP camera.",
        category: "CAMERAS",
        price: 15000
      },
      {
        ean: 1002,
        name: "High quality tripod",
        description: "High quality tripod for extra stability and support",
        category: "ACCESSORIES",
        price: 25500
      },
      {
        ean: 1003,
        name: "DIGITAL CAMERA",
        description: "Zoom Digital Camera, 8 MP, 2.5&quot;&quot; LCD",
        category: "CAMERAS",
        price: 13500
      },
      {
        ean: 1004,
        name: "BATTERY VIDEO LIGHT",
        description: "20-watt video light compatible with InfoLIYHIUM M-series batteries.",
        category: "SUPPLIES",
        price: 8500
      },
      {
        ean: 1005,
        name: "VIDEOTAPE 3 P",
        description: "3-pack Digital8 Tape - 60 min. Make the most of the digital power of your Digital8",
        category: "SUPPLIES",
        price: 1750},
      {
        ean: 1006,
        name: "ADAPTER AC INFOLITHIUM F CYBERSHOT",
        description: "AC Power Adaptor",
        category: "SUPPLIES",
        price: 4350
      }
    ];

    return { data };
  };



}
