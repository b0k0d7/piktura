<template>
  <div>
    <b-row>
      <b-col>


        <svg id="svg__colorwheel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.72 500.82">
          <path :class="{'opacity-25': !active.includes(0) && active.length > 0}" class="bg-yellow" d="M230.24,121.42a154.5,154.5,0,0,1,79.53,0l24.88-92.87c-44.43-11.91-85-11.91-129.41,0v0l.1,0Z" transform="translate(-19.64 -19.59)"/>
          <path :class="{'opacity-25': !active.includes(1) && active.length > 0}"  class="bg-yelloworange" d="M446.72,93.22l.06.06.05-.06c-32.53-32.52-67.64-52.8-112.07-64.7l-24.89,92.9a153.67,153.67,0,0,1,68.88,39.78Z" transform="translate(-19.64 -19.59)"/>
          <path :class="{'opacity-25': !active.includes(2) && active.length > 0}" class="bg-orange" d="M418.63,230.16l92.8-24.86c-11.9-44.41-32.16-79.51-64.65-112l-68,68A153.66,153.66,0,0,1,418.63,230.16Z" transform="translate(-19.64 -19.59)"/>
          <path  :class="{'opacity-25': !active.includes(3) && active.length > 0}" class="bg-orangered" d="M418.63,309.84l92.8,24.86h0c11.9-44.43,11.9-85,0-129.4l-92.8,24.86a154.64,154.64,0,0,1,0,79.68Z" transform="translate(-19.64 -19.59)"/>
          <path  :class="{'opacity-25': !active.includes(4) && active.length > 0}" class="bg-red" d="M418.63,309.84a153.66,153.66,0,0,1-39.83,68.91l68,68c32.49-32.51,52.75-67.61,64.65-112Z" transform="translate(-19.64 -19.59)"/>
          <path  :class="{'opacity-25': !active.includes(5) && active.length > 0}" class="bg-redviolet" d="M378.75,378.8a153.67,153.67,0,0,1-68.88,39.78l24.89,92.9c44.43-11.9,79.54-32.18,112.07-64.7l-.05-.06-.06.06Z" transform="translate(-19.64 -19.59)"/>
          <path  :class="{'opacity-25': !active.includes(6) && active.length > 0}" class="bg-violet" d="M230.24,418.58l-24.89,92.9-.1,0v0c44.43,11.91,85,11.91,129.41,0l-24.88-92.87a154.5,154.5,0,0,1-79.53,0Z" transform="translate(-19.64 -19.59)"/>
          <path  :class="{'opacity-25': !active.includes(7) && active.length > 0}" class="bg-blueviolet" d="M161.3,378.75l-68,68c32.5,32.5,67.58,52.76,112,64.67l24.89-92.9A153.66,153.66,0,0,1,161.3,378.75Z" transform="translate(-19.64 -19.59)"/>
          <path :class="{'opacity-25': !active.includes(8) && active.length > 0}"  class="bg-blue" d="M28.57,334.7c11.91,44.44,32.18,79.55,64.71,112.08l68-68a153.76,153.76,0,0,1-39.83-68.94Z" transform="translate(-19.64 -19.59)"/>
          <path  :class="{'opacity-25': !active.includes(9) && active.length > 0}" class="bg-bluegreen" d="M121.47,230.19,28.57,205.3h0c-11.9,44.43-11.9,85,0,129.4l92.9-24.89a154.7,154.7,0,0,1,0-79.62Z" transform="translate(-19.64 -19.59)"/>
          <path  :class="{'opacity-25': !active.includes(10) && active.length > 0}" class="bg-green" d="M161.3,161.25l-68-68c-32.53,32.53-52.8,67.64-64.71,112.08l92.9,24.89A153.76,153.76,0,0,1,161.3,161.25Z" transform="translate(-19.64 -19.59)"/>
          <path :class="{'opacity-25': !active.includes(11) && active.length > 0}"  class="bg-yellowgreen" d="M230.14,121.45l-24.89-92.9c-44.39,11.91-79.47,32.17-112,64.67l68,68A153.66,153.66,0,0,1,230.14,121.45Z" transform="translate(-19.64 -19.59)"/>


          <g id="alaphatszog"
             :class="{'opacity-0': active.length > 0}">
            <polygon class="bg-green" points="250.25 97.93 118.12 175.33 118.12 328.6 250.25 97.93"/>
            <polygon class="bg-orange" points="382.69 327.99 382.69 175.01 248.71 97.84 248.63 97.88 382.69 327.99"/>
            <polygon class="bg-violet" points="118.12 326.96 118.12 326.96 250.41 403.34 382.69 326.96 382.69 326.96 118.12 326.96"/>
            <polygon class="bg-yellow" points="249.61 97.93 183.66 213.29 250.44 251.18 316.57 212.8 249.61 97.93"/>
            <polygon class="bg-red" points="383.42 327.2 316.32 212.51 250.17 251.49 250.46 327.95 383.42 327.2"/>
            <polygon class="bg-blue" points="118 328.6 250.66 327.71 250.05 250.98 183.84 213.08 118 328.6"/>
          </g>

          <g id="kettoshangzatok">
            <line :class="{'opacity-25': active.includes(0) && active.includes(6) && active.length === 2}" class="cls-14 opacity-0" x1="250.36" y1="98.9" x2="250.36" y2="403.39"/>
            <line  :class="{'opacity-25': active.includes(1) && active.includes(7) && active.length === 2} "  class="cls-14 opacity-0" x1="326.53" y1="118.56" x2="174.29" y2="382.26"/>
            <line  :class="{'opacity-25': active.includes(2) && active.includes(8) && active.length === 2}"  class="cls-14 opacity-0" x1="382.26" y1="174.29" x2="118.56" y2="326.53"/>
            <line  :class="{'opacity-25': active.includes(3) && active.includes(9) && active.length === 2}"  class="cls-14 opacity-0" x1="402.66" y1="250.41" x2="98.16" y2="250.41"/>
            <line  :class="{'opacity-25': active.includes(4) && active.includes(10) && active.length === 2}" class="cls-14 opacity-0" x1="382.26" y1="326.53" x2="118.56" y2="174.29"/>
            <line  :class="{'opacity-25': active.includes(5) && active.includes(11) && active.length === 2}" class="cls-14 opacity-0" x1="326.53" y1="382.26" x2="174.29" y2="118.56"/>
          </g>

          <g id="harmashangzatok-egyenlo">
            <polygon :class="{'opacity-25': active.includes(0) && active.includes(4) && active.includes(8) &&  active.length === 3}" class="cls-14 opacity-0" points="250.41 99.3 119.6 325.86 381.22 325.86 250.41 99.3"/>
            <polygon :class="{'opacity-25': active.includes(1) && active.includes(5) && active.includes(9) &&  active.length === 3}" class="cls-14 opacity-0" points="326.08 119.6 99.51 250.41 326.08 381.22 326.08 119.6"/>
            <polygon :class="{'opacity-25': active.includes(2) && active.includes(6) && active.includes(10) &&  active.length === 3}" class="cls-14 opacity-0" points="381.11 174.34 119.5 174.34 250.3 400.9 381.11 174.34"/>
            <polygon :class="{'opacity-25': active.includes(3) && active.includes(7) && active.includes(11) &&  active.length === 3}" class="cls-14 opacity-0" points="401.06 250.41 174.5 119.6 174.5 381.22 401.06 250.41"/>
          </g>

          <g id="harmashangzat-egyenlooldalu">

            <polygon :class="{'opacity-25': active.includes(0) && active.includes(5) && active.includes(7) &&  active.length === 3}"    class="cls-14 opacity-0" points="250.3 99.89 326.04 381.92 174.57 381.92 250.3 99.89"/>

            <polygon :class="{'opacity-25': active.includes(1) && active.includes(6) && active.includes(8) &&  active.length === 3}" class="cls-14 opacity-0" points="326.15 119.42 250.72 401.52 119.55 325.79 326.15 119.42"/>
            <polygon  :class="{'opacity-25': active.includes(2) && active.includes(7) && active.includes(9) &&  active.length === 3}" class="cls-14 opacity-0" points="381.42 175.32 175.05 381.92 99.32 250.74 381.42 175.32"/>
            <polygon   :class="{'opacity-25': active.includes(3) && active.includes(8) && active.includes(10) &&  active.length === 3}" class="cls-14 opacity-0" points="401.49 250.41 119.47 326.14 119.47 174.68 401.49 250.41"/>
            <polygon :class="{'opacity-25': active.includes(4) && active.includes(9) && active.includes(11) &&  active.length === 3}" class="cls-14 opacity-0" points="381.39 326.14 99.28 250.72 175.02 119.55 381.39 326.14"/>
          </g>
<!--          <g id="harmashangzat-komplementercsere">-->
<!--            <polygon class="cls-14" points="250.41 99.98 326.15 382.01 174.68 382.01 250.41 99.98"/>-->
<!--            <polygon class="cls-14" points="250.3 401.88 174.57 119.86 326.04 119.86 250.3 401.88"/>-->
<!--            <polygon class="cls-14" points="380.93 326.46 98.82 251.04 174.56 119.86 380.93 326.46"/>-->
<!--            <polygon class="cls-14" points="119.13 175.41 401.24 250.83 325.5 382.01 119.13 175.41"/>-->
<!--            <polygon class="cls-14" points="380.89 175.41 174.52 382.01 98.78 250.83 380.89 175.41"/>-->
<!--            <polygon class="cls-14" points="120.56 326.46 326.93 119.86 402.66 251.04 120.56 326.46"/>-->
<!--          </g>-->

          <g id="negyes-negyzet">
            <rect :class="{'opacity-25': active.includes(0) && active.includes(3) && active.includes(6) && active.includes(9) && active.length === 4}" class="cls-14 opacity-0" x="161.78" y="161.78" width="216.43" height="216.43" transform="translate(-131.48 250.41) rotate(-45)"/>
            <rect :class="{'opacity-25': active.includes(1) && active.includes(4) && active.includes(7) && active.includes(10) && active.length === 4}"  class="cls-14 opacity-0" x="161.78" y="161.78" width="216.43" height="216.43" transform="translate(-80.32 59.49) rotate(-15)"/>
            <rect :class="{'opacity-25': active.includes(2) && active.includes(5) && active.includes(8) && active.includes(11) && active.length === 4}"  class="cls-14 opacity-0" x="161.78" y="161.78" width="216.43" height="216.43" transform="matrix(0.26, -0.97, 0.97, 0.26, -80.32, 441.33)"/>
          </g>

          <g id="negyes-teglalap" data-name="Layer 8">
            <rect :class="{'opacity-25': active.includes(11) && active.includes(1) && active.includes(5) && active.includes(7) && active.length === 4}" class="cls-14 opacity-0" x="173.63" y="120.45" width="153.45" height="259.91"/>
            <rect :class="{'opacity-25': active.includes(0) && active.includes(2) && active.includes(6) && active.includes(8) && active.length === 4}" class="cls-14 opacity-0" x="140.04" y="193.28" width="259.91" height="153.45" transform="translate(-118.47 349.24) rotate(-60)"/>
            <rect :class="{'opacity-25': active.includes(1) && active.includes(3) && active.includes(7) && active.includes(9) && active.length === 4}" class="cls-14 opacity-0" x="140.04" y="193.28" width="259.91" height="153.45" transform="translate(-118.47 151.58) rotate(-30)"/>
            <rect :class="{'opacity-25': active.includes(2) && active.includes(4) && active.includes(8) && active.includes(10) && active.length === 4}" class="cls-14 opacity-0" x="193.28" y="140.04" width="153.45" height="259.91" transform="translate(-24.03 515.95) rotate(-89.06)"/>
          </g>

          <b-button @click="setColorsActive([0, 2, 5, 7, 10])" class=" m-1">sárga - narancs - vörösesibolya - kékesibolya - zöld</b-button>
          <b-button @click="setColorsActive([1, 3, 6, 8, 11])"  class=" m-1">s.narancs - vörösesnarancs - kék - ibolya - sárgászöld</b-button>
          <b-button @click="setColorsActive([2, 4, 7, 9, 0])"  class=" m-1">narancs - vörös - kékesibolya - zöldeskék - sárga</b-button>

          <g id="otos">
            <g :class="{'opacity-25': active.includes(1) && active.includes(3) && active.includes(6) && active.includes(8) && active.includes(11) && active.length === 5}" class="opacity-0">
              <line class="cls-14" x1="248.11" y1="401.71" x2="115.7" y2="319.7"/>
              <g>
                <line class="cls-14" x1="328.6" y1="121.39" x2="401.14" y2="253.8"/>
                <line class="cls-14" x1="401.14" y1="253.8" x2="248.11" y2="401.71"/>
                <line class="cls-14" x1="115.7" y1="319.7" x2="175.79" y2="118.87"/>
                <line class="cls-14" x1="175.79" y1="118.87" x2="328.6" y2="121.39"/>
              </g>
            </g>



            <g :class="{'opacity-25': active.includes(0) && active.includes(2) && active.includes(5) && active.includes(7) && active.includes(10) && active.length === 5}" class="opacity-0">
              <line class="cls-14" x1="328.3" y1="381.01" x2="172.55" y2="381.3"/>
              <g>
                <line class="cls-14" x1="248.61" y1="100.47" x2="380.14" y2="174.59"/>
                <line class="cls-14" x1="380.14" y1="174.59" x2="328.3" y2="381.01"/>
                <line class="cls-14" x1="172.55" y1="381.3" x2="117.52" y2="179.03"/>
                <line class="cls-14" x1="117.52" y1="179.03" x2="248.61" y2="100.47"/>
              </g>
            </g>
            <g :class="{'opacity-25': active.includes(2) && active.includes(4) && active.includes(7) && active.includes(9) && active.includes(0) && active.length === 5}" class="opacity-0">
              <line class="cls-14" x1="170.12" y1="378.18" x2="97.1" y2="243.03"/>
              <g>
                <line class="cls-14" x1="379.44" y1="179.41" x2="375.75" y2="327.88"/>
                <line class="cls-14" x1="375.75" y1="327.88" x2="170.12" y2="378.18"/>
                <line class="cls-14" x1="97.1" y1="243.03" x2="249.15" y2="101.83"/>
                <line class="cls-14" x1="249.15" y1="101.83" x2="379.44" y2="179.41"/>
              </g>
            </g>
          </g>
          <g id="hatos">
            <polygon :class="{'opacity-25': active.includes(0) && active.includes(2) && active.includes(4) && active.includes(6) && active.includes(8) && active.includes(10) && active.length === 6}"  class="cls-14 opacity-0" points="381.36 174.78 250.36 99.14 119.35 174.78 119.35 326.05 250.36 401.68 381.36 326.05 381.36 174.78"/>
            <polygon :class="{'opacity-25': active.includes(1) && active.includes(3) && active.includes(5) && active.includes(7) && active.includes(9) && active.includes(11) && active.length === 6}" class="cls-14 opacity-0" points="401.63 250.41 325.99 119.41 174.72 119.41 99.09 250.41 174.72 381.42 325.99 381.42 401.63 250.41"/>
          </g>
        </svg>
        <div class="d-flex justify-content-center">
          <b-button @click="setColorsActive([])" class="btn-reset m-1">Színkör alaphelyzetbe állítása</b-button>
        </div>


      </b-col>
      <b-col class="accordion">
        <h1>Színtan</h1>
        <p>Az alábbi oldalnak az általános színszabályok és színharmóniák bemutatása a célja, részletekért kattints a fejezetek nevére!</p>
        <p>A fejezeteken belül található gombokra kattintva a színkör kiemeli a választott színharmóniát.</p>
        <div class="inner-scroll">


        <h2 v-b-toggle="'collapse-colors'" >12 szín</h2>
        <b-collapse id="collapse-colors" accordion="my-accordion">
          <b-button @click="setColorsActive([0])" class=" m-1">sárga</b-button>
          <b-button @click="setColorsActive([1])" class="m-1">sárgásnarancs</b-button>
          <b-button @click="setColorsActive([2])"  class="m-1">narancs</b-button>
          <b-button @click="setColorsActive([3])"  class="m-1">vörösesnarancs</b-button>
          <b-button @click="setColorsActive([4])"  class="m-1">vörös</b-button>
          <b-button @click="setColorsActive([5])"  class="m-1">vörösesibolya</b-button>
          <b-button @click="setColorsActive([6])" class="m-1">ibolya</b-button>
          <b-button @click="setColorsActive([7])"  class="m-1">kékesibolya</b-button>
          <b-button @click="setColorsActive([8])"  class="m-1">kék</b-button>
          <b-button @click="setColorsActive([9])"  class="m-1">kékeszöld</b-button>
          <b-button @click="setColorsActive([10])"  class="m-1">zöld</b-button>
          <b-button @click="setColorsActive([11])"  class="m-1">sárgászöld</b-button>
<!--          <b-collapse id="collapse-2">-->
<!--            <b-card>I am collapsible content!</b-card>-->
<!--          </b-collapse>-->
        </b-collapse>

        <h2 v-b-toggle="'collapse-two'" >Kettőshangzatok</h2>
        <b-collapse id="collapse-two" accordion="my-accordion">
          <p>A tizenkét osztatú színkörben az egymással szemben álló két szín komplementer.</p>
          <b-button @click="setColorsActive([0, 6])" class=" m-1">sárga - ibolya</b-button>
          <b-button @click="setColorsActive([1, 7])" class=" m-1">sárgásnarancs - kékesibolya</b-button>
          <b-button @click="setColorsActive([2, 8])" class=" m-1">narancs - kék</b-button>
          <b-button @click="setColorsActive([3, 9])" class=" m-1">vörösesnarancs - kékeszöld</b-button>
          <b-button @click="setColorsActive([4, 10])" class=" m-1">vörös - zöld</b-button>
          <b-button @click="setColorsActive([5, 11])" class=" m-1">vörösesibolya - sárgászöld</b-button>
        </b-collapse>

        <h2 v-b-toggle="'collapse-three'" >Hármashangzatok</h2>
        <b-collapse id="collapse-three" accordion="my-accordion">
          <p>Egyenlő oldalú háromszög szerint:</p>
          <b-button @click="setColorsActive([0, 4, 8])" class=" m-1">sárga - vörös - kék</b-button>
          <b-button @click="setColorsActive([1, 5, 9])"  class=" m-1">sárgásnarancs - vörösesibolya - kékeszöld</b-button>
          <b-button @click="setColorsActive([2, 6, 10])"  class=" m-1">narancs - ibolya - zöld</b-button>
          <b-button @click="setColorsActive([3, 7, 11])"  class=" m-1">vörösesnarancs - kékesibolya - sárgászöld</b-button>

          <p>Egyenlő szárú háromszög szerint:</p>
          <b-button @click="setColorsActive([0, 5, 7])" class=" m-1">sárga - vörösesibolya - kékesibolya</b-button>
          <b-button @click="setColorsActive([1, 6, 8])" class=" m-1">sárgásnarancs - ibolya - kék</b-button>
          <b-button @click="setColorsActive([2, 7, 9])" class=" m-1">narancs - kékesibolya - zöldeskék</b-button>
          <b-button @click="setColorsActive([3, 8, 10])" class=" m-1">vörösesnarancs - kék - zöld</b-button>
          <b-button @click="setColorsActive([4, 9, 11])" class=" m-1">vörös - kékeszöld - sárgászöld</b-button>

          <p>Hármashangzatokhoz juthatunk még, ha a a komplementer egyik színét a két szomszédos színnel helyettesítjük:</p>
          <b-button @click="setColorsActive([0, 7, 5, null])" class=" m-1">sárga - kékesibolya - vörösesibolya</b-button>
          <b-button @click="setColorsActive([6, 11, 1, null])" class=" m-1">ibolya - sárgászöld - sárgásnarancs</b-button>
          <b-button @click="setColorsActive([4, 11, 9, null])" class=" m-1">vörös - sárgászöld - kékeszöld</b-button>
          <b-button @click="setColorsActive([10, 3, 5, null])" class=" m-1">zöld - vörösesnarancs - vörösesibolya</b-button>
          <b-button @click="setColorsActive([2, 9, 7, null])" class=" m-1">narancs - kékeszöld - kékesibolya</b-button>
          <b-button @click="setColorsActive([8, 1, 3])" class=" m-1">kék - sárgásnarancs - vörösesnarancs</b-button>
        </b-collapse>

          <h2 v-b-toggle="'collapse-four'" >Négyeshangzatok</h2>
          <b-collapse id="collapse-four" accordion="my-accordion">
            <p>Négyzettel kiválasztva:</p>
            <b-button @click="setColorsActive([0, 3, 6, 9])" class=" m-1">sárga - vörösesnarancs - ibolya - kékeszöld</b-button>
            <b-button @click="setColorsActive([1, 4, 7, 10])"  class=" m-1">sárgásnarancs - vörös- kékesibolya - zöld</b-button>
            <b-button @click="setColorsActive([2, 5, 8, 11])"  class=" m-1">narancs - vörösesibolya - kék - sárgászöld</b-button>

            <p>Téglalappal kiválasztva:</p>
            <b-button @click="setColorsActive([11, 1, 5, 7])" class=" m-1">sárgászöld - sárgásnarancs - vörösesibolya - kékesibolya</b-button>
            <b-button @click="setColorsActive([0, 2, 6, 8])" class=" m-1">sárga - narancs - ibolya - kék</b-button>
            <b-button @click="setColorsActive([1, 3, 7, 9])" class=" m-1">sárgásnarancs - vörösesnarancs - kékesibolya - zöldeskék</b-button>
            <b-button @click="setColorsActive([2, 4, 8, 10])" class=" m-1">narancs - vörös - kék - zöld</b-button>
          </b-collapse>

          <h2 v-b-toggle="'collapse-five'" >Ötöshangzatok</h2>
          <b-collapse id="collapse-five" accordion="my-accordion">
            <p>Ötszöggel kiválasztva:</p>
            <b-button @click="setColorsActive([0, 2, 5, 7, 10])" class=" m-1">sárga - narancs - vörösesibolya - kékesibolya - zöld</b-button>
            <b-button @click="setColorsActive([1, 3, 6, 8, 11])"  class=" m-1">s.narancs - vörösesnarancs - kék - ibolya - sárgászöld</b-button>
            <b-button @click="setColorsActive([2, 4, 7, 9, 0])"  class=" m-1">narancs - vörös - kékesibolya - zöldeskék - sárga</b-button>

          </b-collapse>

          <h2 v-b-toggle="'collapse-six'" >Hatoshangzatok</h2>
          <b-collapse id="collapse-six" accordion="my-accordion">
            <p>Hatszöggel kiválasztva:</p>
            <b-button @click="setColorsActive([0, 2, 4, 6, 8, 10])" class=" m-1">sárga - narancs - vörös - ibolya - kék - zöld</b-button>

            <b-button @click="setColorsActive([1, 3, 5, 7, 9, 11])"  class=" m-1">s.narancs - v.narancs - v.ibolya - k.ibolya - k.zöld - s.zöld</b-button>
          </b-collapse>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ColorsView",
  data: function () {
    return {
      active: [],
    }
  },
  methods:{
    setColorsActive(colors){
      this.active = colors;
    }
  }
}
</script>

<style scoped>
.inner-scroll{
  overflow-y: scroll;
  height: 63vh;
}
.btn-reset{
  margin-top: 50px !important;
}

.collapse{
}
/*h2{*/
/*  margin-top: 50px;*/
/*}*/
.row .col:nth-child(2){
  padding-left: 50px;
}
#svg__colorwheel path{
  transition: ease all 0.25s;
}

.opacity-25, .opacity-0, #alaphatszog{
  transition: ease all 0.25s;
}

.cls-14 {
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
}

.bg-yellow {
  fill: var(--color-yellow);
  background-color: var(--color-yellow);
  color: black;
  border: none;
}

.bg-yelloworange {
  fill: #fabc02;
}

.bg-orange {
  fill: #fb9902;
}

.bg-orangered {
  fill: #fd5308;
}

.bg-red {
  fill: #fe2712;
}

.bg-redviolet {
  fill: #a7194b;
}

.bg-violet {
  fill: #8601af;
}

.bg-blueviolet {
  fill: #3d01a4;
}

.bg-blue {
  fill: #0247fe;
}

.bg-bluegreen {
  fill: #0391ce;
}

.bg-green {
  fill: #66b032;
}

.bg-yellowgreen {
  fill: #d0ea2b;
}

</style>