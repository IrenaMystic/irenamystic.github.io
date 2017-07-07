import { Injectable } from '@angular/core';

export interface ProjectMember {
  name: string,
  role: string
}

export interface ProjectAction {
  icon: string,
  link: string
}

export interface Project {
  name: string,
  company?: string,
  year: string,
  description: string,
  picture: string,
  projectMembers: ProjectMember[],
  projectActions?: ProjectAction[]
}


@Injectable()
export class ProjectService {

  public projects: Project[] = [
    {
      name: 'Klonk',
      year: '2016-Present',
      picture: 'klonk.png',
      description: `This is a 3D platformer, endless runner, mobile game that my friends and I are making in our free time. Test your
            speed and patience to run away from your foe, unlock new characters and features, and compete with friends. The
            game is made with Unity.`,
      projectMembers: [
         {
          name: 'My Role',
          role: 'UI & Game Developer'
        },
        {
          name: 'Mario Ampov',
          role: 'Game Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'Game Artist'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Branding & Visual Identity'
        }
      ],
      projectActions: [
        {
          icon: 'fa-youtube',
          link: 'https://youtu.be/nHrZXyP7ojk'
        }
      ]
    },
    {
      name: 'Excubitor',
      company: 'Tesseract Interactive',
      picture: 'excubitor.png',
      year: '2015-2016',
      description: `Excubitor is a Sci-fi action tower defense game played from an overhead perspective with intense action and depth,
            featuring exhilarating ship combat, unique terrestrial and space environments, strategic defense planning and
            massive boss fights. It is made with Unity`,
      projectMembers: [
         {
          name: 'My Role',
          role: 'UI Developer'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'http://excubitorgame.com/'
        },
         {
          icon: 'fa-facebook',
          link: 'https://www.facebook.com/ExcubitorGame/'
        },
         {
          icon: 'fa-steam',
          link: 'http://store.steampowered.com/app/357030/Excubitor/'
        }
      ]
    },
    {
      name: 'Pizzle Pilot',
      year: '2015',
      picture: 'puzzlepilot.png',
      description: `2D Puzzle game that me and a couple of friends made in our free time. The game is suppose to challenge your spatial
            and color indexing with fun game mechanics. It is made with Unity.`,
      projectMembers: [
         {
          name: 'My Role',
          role: 'UI & Game Developer'
        },
        {
          name: 'Mario Ampov',
          role: 'Game Developer Game Design'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'Game Artist and Game Design'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Game Design'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'http://bigfatsparrow.com/puzzlepilot/'
        },
        {
          icon: 'fa-facebook',
          link: 'https://www.facebook.com/puzzlepilotapp'
        },
        {
          icon: 'fa-youtube',
          link: 'https://www.youtube.com/watch?v=ojwV119IgFk&t=3s'
        },
        {
          icon: 'fa-android',
          link: 'https://play.google.com/store/apps/details?id=com.vm.puzzlepilot&hl=en'
        },
        {
          icon: 'fa-apple',
          link: 'https://itunes.apple.com/us/app/puzzle-pilot/id966311595'
        },
        {
          icon: 'fa-amazon',
          link: 'https://www.amazon.com/dp/B06XYSKJMZ/'
        }
      ]
    },
    {
      name: 'Rite of Passage',
      year: '2016',
      picture: 'riteofpassage.png',
      description: `Prototype game for Global Game Jam with theme "Ritual". We follow the story of a young man who is about to get
            on the ritual to get from boy to a man. To earn his rite of passage. Marked by the colours of the warrior he
            is on a trial to become one. It's a puzzle platformer. Made with Unity.`,
      projectMembers: [
         {
          name: 'My Role',
          role: 'UI & Game Developer'
        },
        {
          name: 'Mario Ampov',
          role: 'Game Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'Game Artist'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'http://globalgamejam.org/2016/games/rite-passage-7'
        },
        {
          icon: 'fa-youtube',
          link: 'https://www.youtube.com/watch?v=3jqr_JwfzBE'
        }
      ]
    },
    {
      name: 'Inspired',
      year: '2014',
      picture: 'inspired.png',
      description: `Prototype game for Global Game Jam with theme "Not everything is what is seems". Your confidence is taken as an
            evil entity and the hero has to be encouraged by others in order to fly, jump higher, run etc. In addition, he
            easily falls under others influence. The game is made with Unity.`,
      projectMembers: [
         {
          name: 'My Role',
          role: 'UI & Game Developer'
        },
        {
          name: 'Mario Ampov',
          role: 'Game Developer'
        },
        {
          name: 'Ilija Vankov',
          role: 'Game Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'Game Artist'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'http://globalgamejam.org/2014/games/inspired'
        },
        {
          icon: 'fa-youtube',
          link: 'https://www.youtube.com/watch?v=_WKBZATzTts&t=1s'
        }
      ]
    },
    {
      name: 'Mi Se Jade',
      year: '2017',
      picture: 'misejade.png',
      description: `This is a web application that helps people decide what to order to eat while at work, at home or simply want to
            save time. The idea came to life by our own stuggles while me and my friends were working together. The app is
            made with Angular.`,
      projectMembers: [
         {
          name: 'My Role',
          role: 'Developer'
        },
        {
          name: 'Mario Ampov',
          role: 'Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'UI/UX'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Branding & Visual Identity'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'https://www.misejade.mk'
        }
      ]
    },
    {
      name: 'FitKit',
      year: '2017',
      picture: 'fitkit.png',
      description: `Hybrid mobile app that allows you to workout everything, anywhere and anytime you choose, at the best gyms and
            studios near you. With a monthly payment, you can choose time, location and studio to workout. The app is made
            with Angular 2, Ionic 2 and Firebase.`,
      projectMembers: [
         {
          name: 'My Role',
          role: 'Developer'
        },
        {
          name: 'Mario Ampov',
          role: 'Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'UI/UX'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Branding & Visual Identity'
        }
      ],
      projectActions: [
        {
          icon: 'fa-facebook',
          link: 'https://www.facebook.com/fitkitmk/'
        },
        {
          icon: 'fa-android',
          link: 'https://play.google.com/store/apps/details?id=mk.fitkit.app'
        },
        {
          icon: 'fa-apple',
          link: 'https://itunes.apple.com/us/app/fitkit-mk/id1237334836?mt=8'
        }
      ]
    },
    {
      name: 'Dareio',
      year: '2017',
      picture: 'dareio.png',
      description: `Dareio is a location-based social search hybrid mobile app that facilitates communication between mutually interested
            users, allowing matched users to chat. The app is made with Angular 2, Ionic 2 and Firebase.`,
      projectMembers: [
         {
          name: 'My Role',
          role: 'Developer'
        },
        {
          name: 'Mario Ampov',
          role: 'Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'UI/UX'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Branding & Visual Identity'
        }
      ]
    },
    {
      name: 'Upverb',
      year: '2017',
      picture: 'upverb.png',
      description: `Online language learning platform that enables teachers and students to schedule classes. Made with Angular 2 and
            NodeJS.`,
      projectMembers: [
         {
          name: 'My Role',
          role: 'Developer'
        },
        {
          name: 'Mario Ampov',
          role: 'Developer'
        },
        {
          name: 'Marijan Petrovski',
          role: 'Project Manager'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'https://www.upverb.com'
        }
      ]
    }
  ];

  constructor() { }

}
