function launchForm() {
  //uesr input
  var drawnName = document.querySelector(".drawnName").value;
  var checkedName = document.querySelector(".checkedName").value;
  var approvedName = document.querySelector(".approvedName").value;
  var date = document.querySelector(".date").value;
  var Chassis = document.querySelector(".Chassis").value;
  var Project = document.querySelector(".Project").value;
  var Customer = document.querySelector(".Customer").value;
  // var assemblyNumber = document.querySelector(".assemblyNumber").value;
  var frameNumber = document.querySelector(".frameNumber").value;
  // var panelNumber = document.querySelector(".panelNumber").value;
  var length = document.querySelector(".length").value;
  var width = document.querySelector(".width").value;
  //-----------------------------------------------------------
  var litem1 = document.querySelector(".litem1");
  var nemani = document.querySelector(".nemani1");
  var div40 = document.querySelector(".div40"); //date
  var div41 = document.querySelector(".div41"); //date
  var div42 = document.querySelector(".div42"); //date
  var akash1 = document.querySelector(".akash1");
  var prc = document.querySelector(".prc");
  var bb5950wb = document.querySelector(".bb-5950-wb");
  var odyssey = document.querySelector(".odyssey");
  var autobhan = document.querySelector(".autobhan");
  var item112 = document.querySelector(".item112"); //frame number

  //-----------------------------frame-----------------------

  //--------------------------------------------------------------
  litem1.textContent = drawnName;
  akash1.textContent = checkedName;
  nemani.textContent = drawnName;
  prc.textContent = approvedName;
  div40.textContent = date;
  div41.textContent = date;
  div42.textContent = date;
  item112.textContent = frameNumber;
  bb5950wb.textContent = Chassis;
  odyssey.textContent = Project;
  autobhan.textContent = Customer;

  //------------frame---------------

  //-------------------------------

  var length = length;
  var height = width;

  const sideflap = 3;
  // const bootom=35;

  //   //extrusion HEIGHT
  const extrusionheight = 67;
  //   const frameandpanelgap = 60;

  //   //frame varible
  let frameSidedistance = 32;
  let extrusionsidedistance = 40;
  let bootomsidedistance = 103;
  let budgetlockdirection = 40;
  let gasspringsupportdistance = 170;
  let budgetlockdirectiondistance = 85;

  //------------------------------------------------
  var div10 = document.querySelector(".div10");
  div10.textContent = extrusionsidedistance; //link

  var div11 = document.querySelector(".div11");
  div11.textContent = extrusionsidedistance; //link

  //---------------------------------------------------

  var div15 = document.querySelector(".div15");
  div15.textContent = bootomsidedistance; //link

  var div14 = document.querySelector(".div14");
  div14.textContent = bootomsidedistance; //link
  //---------------------------------------------------
  var div34 = document.querySelector(".div34");
  div34.textContent = budgetlockdirection; //link
  //----------------------------------------------------
  var div35 = document.querySelector(".div35");
  div35.textContent = gasspringsupportdistance; //link
  //--------------------------------------------------
  var div33 = document.querySelector(".div33");
  div33.textContent = budgetlockdirectiondistance; //link
  //---------------------------------------------------

  // //   let stayrodedistance = 125; //gas-spring add functuion automatic calculate and set input

  // //   let budgetlock = 103;

  //  SS ROD
  //  DIA:7.8 mm
  //  matrial:SS
  //  QUANTITY:2
  //  LENGHTH : ?
  const I6 = 300;
  // const I6D = 7.8;
  // const I6M = "SS";

  //   //DETAIL 4
  //   const Rectube = 90;

  //   //SHOWN-8,OPP-9;
  //   let h = 70;
  //   let w = 50;
  //   let z = 20;
  //   let Cutout = 15;
  //   let diamiter = 5;
  //   let diamiterposition = 10;

  //   //DETAIL:
  //   let H = 20;
  //   let W = 20;
  //   let Hsmall = 15;

  //ITEMS 4
  //REC TUBE( S 20 X 40 X 2.0 AE)
  //I-item, 4-ITEM NO, H-HEIGHT, W-WIDTH, L-LENGTH

  const I4H = 40;
  const I4W = 20;
  const I4L = 90;

  //ITEM 17 || HAT SECION
  //HAT SEC
  let IH15 = 15;
  let IH13 = 15 - 2;
  let IH20 = 20;
  let IH50 = 50;
  let radius = "R35554";
  let IH11 = 11;
  let IH33 = 33;

  //   //ITEMS 8 AND 9
  //   //gasspring MATING SECTON (L 50X50X5.0)
  //   let IGS = 70;

  //   //ITEM 9

  //   //ITEM 10
  //   //020 000 290 PV
  //   const p = 2;

  //   console.log("--------------------------FRAME-----------------------------");

  //--------frameSidedistance------------
  console.log("diamesion" + " : " + frameSidedistance);

  //--------------extrusionsidedistance--------------------
  console.log("diamesion" + " : " + extrusionsidedistance);
  var div12 = document.querySelector(".div12");
  div12.textContent = frameSidedistance; //link

  var div13 = document.querySelector(".div13");
  div13.textContent = frameSidedistance; //link

  //ITEMS 5
  function exframe(l, y) {
    let framesidedistance = y * 2;

    let exframelength = l - framesidedistance;

    return exframelength;

    // console.log("framelenghth"+" "+ framelength);
  }

  let exFrameLength = exframe(length, sideflap);
  console.log("Item 5:" + "L=" + exFrameLength + "mm");
  //-----------------------------------------------//

  var litem14 = document.querySelector(".litem14");
  litem14.textContent = exFrameLength; //link

  var div1 = document.querySelector(".div1");
  div1.textContent = exFrameLength; //link
  //-------------------------------------------------//
  //---------------------horizontal FrameLength -----------------------
  function frame(l, y) {
    let framesidedistance = y * 2;
    let framelength = l - framesidedistance;
    return framelength;
    // console.log("framelenghth"+" "+ framelength);
  }
  let FrameLength = frame(exFrameLength, frameSidedistance);
  console.log("framehorizontallength" + " : " + FrameLength);
  //---------------------------------------------------------------------
  var div5 = document.querySelector(".div5");
  div5.textContent = FrameLength; //link
  //----------------------------------------------------------------

  //-------------------------------------------------------------------------------------
  //     //Sec A-A OR SecAA   Y=30%
  //     function secAA(x) {
  //       let y = x / 2;
  //       return (30 * y) / 100;
  //       //roundup value are pending
  //     }
  //     var Y = secAA(FrameLength);
  //     var YY = Y * 2;
  //     console.log("Y" + " " + "|" + " " + YY); // SEC A-A diamesion pri
  //     //Sec A-A OR SecAA   x=70%
  //     function SecAA(x) {
  //       let y = x / 2;
  //       return (70 * y) / 100;
  //       //roundup value are pending
  //     }
  //     var X = SecAA(FrameLength);
  //     console.log("X" + " " + "|" + " " + X); //SEC A-A diamesion print;
  ////-------------------------------------------------------------------------------------

  function secAA(x) {
    let y = x / 3;
    return y;
    //roundup value are pending
  }
  var Y = secAA(FrameLength);

  var div3 = document.querySelector(".div3");
  div3.textContent = Y; //link

  var div4 = document.querySelector(".div4");
  div4.textContent = Y; //link

  var div2 = document.querySelector(".div2");
  div2.textContent = Y; //link
  //-----------------------------------------------------------------------
  //ITEMS 1
  function item11(x, t, u, v) {
    // return x - 127;
    var z = x - 127;
    return [z, t, u, v];
  }

  var Iteem17 = item11(height, 19, 20, 40);

  console.log("ITEMS 1" + " " + "|" + " " + Iteem17[0]);

  //-----------------------------------------

  var litem1 = document.querySelector(".litem1");
  litem1.textContent = Iteem17[0]; //link

  var div6 = document.querySelector(".div6");
  div6.textContent = Iteem17[0]; //link

  var div17 = document.querySelector(".div17");
  div17.textContent = Iteem17[1]; //link

  var div22 = document.querySelector(".div22");
  div22.textContent = Iteem17[2]; //link

  var div16 = document.querySelector(".div16");
  div16.textContent = Iteem17[3]; //link

  var div8 = document.querySelector(".div8");
  div8.textContent = Iteem17[0]; //link
  //--------------------------------------
  //   // //ITEMS 2

  //ITEMS 3
  function item33(x) {
    return x - 80;
  }

  var Iteem3 = item33(FrameLength);

  console.log("ITEMS 3" + " " + "|" + " " + Iteem3);

  //--------------------------------------------------------
  // var div5 = document.querySelector(".div5");
  // div5.textContent = Iteem3; //link
  var div5 = document.querySelector(".div5");
  div5.textContent = FrameLength; //link
  //--------------------------------------------------------

  // //ITEM 4
  function i4(X, Y, Z) {
    return [X, Y, Z];
  }
  var i4 = i4(I4H, I4W, I4L);

  console.log("ITEM 4" + " " + ":" + i4[0]);
  console.log("ITEM 4" + " " + ":" + i4[1]);
  console.log("ITEM 4" + " " + ":" + i4[2]);
  //--------------------------------------------------------
  var div20 = document.querySelector(".div20");
  div20.textContent = i4[0]; //link
  //------------------------------------------
  var div21 = document.querySelector(".div21");
  div21.textContent = i4[0]; //link
  //-------------------------------------
  //--------------------------------------------------------
  var div22 = document.querySelector(".div22");
  div22.textContent = i4[1]; //link
  //--------------------------------------------------------
  var div31 = document.querySelector(".div31");
  div31.textContent = i4[0]; //link
  //--------------------------------------------------------

  // //ITEMS 5
  // function item55(x) {
  //   return x - 80;
  // }

  //ITEM 6
  //  SS ROD
  //  DIA:7.8 mm
  //  matrial:SS
  //  QUANTITY:2
  //  LENGHTH : ?

  function iteam6(SS) {
    return SS;
  }
  const i6 = iteam6(I6);
  console.log("ITEAM 6 :" + i6);
  //----------------------------------------
  var litem14 = document.querySelector(".litem14");
  litem14.textContent = i6; //link

  //--------------------------------------------------------

  //ITEMS 7
  function item77(x) {
    return x - 80;
  }

  var Iteem7 = item77(FrameLength);

  console.log("ITEMS 7" + "|" + Iteem7);
  //--------------------------------------------------------
  var litem15 = document.querySelector(".litem15");
  litem15.textContent = Iteem7; //link
  //-------------------------------------
  //--------------------------------------------------------

  //iteam 8 & 9
  //igs=item gas spring
  function igs(X, y, z, i, o, p) {
    return [X, y, z, i, o, p];
  }
  var igs = igs(20, 50, 70, 20, 10, 15);
  // console.log("item 8" + " " + igs1);
  // console.log("item 9" + " " + igs1);
  //----------------------------------------------------------------
  var div38 = document.querySelector(".div38");
  div38.textContent = igs[0]; //link

  var div18 = document.querySelector(".div18");
  div18.textContent = igs[1]; //link

  var div36 = document.querySelector(".div36");
  div36.textContent = igs[2]; //link

  var div19 = document.querySelector(".div19");
  div19.textContent = igs[3]; //link

  var div32 = document.querySelector(".div32");
  div32.textContent = igs[4]; //link

  var div37 = document.querySelector(".div37");
  div37.textContent = igs[5]; //link
  //----------------------------------------------------------------

  // //iteam 10
  // function pv10(x) {
  //   return x;
  // }
  // var pvc = pv10(p);

  // console.log("QUANTITY" + " : " + pvc);

  //   //IEAM 11, 12, 13, 14, 15, 16--------------Emnty

  // //ITEM 17 || HAT SECION
  // //HAT SEC
  // let IH15=15;
  // let IH20=20;
  // let IH50=50;

  function iteam17(x, y, z, R, o, l, u) {
    return [x, y, z, R, o, l, u];
  }

  var i = iteam17(IH15, IH20, IH50, radius, IH13, IH11, IH33);

  // console.log("item no-17 ,dia:" + i[0]);
  // console.log("item no-17 ,dia:" + i[1]);
  // console.log("item no-17 ,dia:" + i[2]);
  // console.log("item no-17 ,dia: RADIUS" + i[3]);

  //------------------------------------------------
  var div23 = document.querySelector(".div23");
  div23.textContent = i[0]; //link

  var div24 = document.querySelector(".div24");
  div24.textContent = i[2]; //link

  var div30 = document.querySelector(".div30");
  div30.textContent = i[1]; //link

  var div25 = document.querySelector(".div25");
  div25.textContent = i[4]; //link

  var div26 = document.querySelector(".div26");
  div26.textContent = i[2]; //link

  var div27 = document.querySelector(".div27");
  div27.textContent = i[4]; //link

  var div28 = document.querySelector(".div28");
  div28.textContent = i[5]; //link

  var div29 = document.querySelector(".div29");
  div29.textContent = i[6]; //link

  ///ITEM 17 length
  function il1(l) {
    var x = l - 276;
    return [x];
  }

  var il = il1(Iteem17[0]);
  var div7 = document.querySelector(".div7");
  div7.textContent = il[0]; //link


  //----------------------------------------------------------------

  //-------------------totalheight=frame height + extrusion height------------------------------

  const totalheight = extrusionheight + Iteem17[0];

  var div9 = document.querySelector(".div9");
  div9.textContent = totalheight; //link

  //-----------------------------------------------------------BILL OF MATRIAL----------------------------------------------------------

  //----------------------PART NUMBER------------------------------------

const iteam66="015 100 783 SR";

const iteam3="S 020 040 20 AE";
const iteam5="D174 2108 00F";
const iteam7="D174 3004 00F";
const iteam10="020 000 290 PV";
const iteam11="D174 2139 00F";


  //----------------------description------------------------------------

  const ditem1 = "LH PILLAR (S 20 x 40 x 2.0 AE)";
   const ditem3="REC TUBE";
  const ditem4 = "REC TUBE( S 20 X 40 X 2.0 AE )";
  const ditem5 = "ALUMINIUM HINGE";
  const ditem6 = "S.S RODE";
  const ditem7 = "LOCK MTG SECTION";
  const ditem8 = "GAS SPRING MTG SECTION (L 50X50X5.0)";
  const ditem9 = "GAS SPRING MTG SECTION (L 50X50X5.0)";
  const ditem10 = "PVC 20 X40 TUBE END COVER";
  const ditem11 = "BUDGET LOCK SUPPORT ASSY";
  const ditem12 = "SUPPORT HAT SEC.(H-20X15X50X2)";

  //------------------quatity-----------------------------

  const qitem1 = 2;
  const qitem3 = 2;
  const qitem4 = 2;
  const qitem5 = 1;
  const qitem6 = 1;
  const qitem7 = 1;
  const qitem8 = 1;
  const qitem9 = 1;
  const qitem10 = 2;
  const qitem11 = 1;
  const qitem12 = 2.0;

  //---------------------MATRIAL------------------------//
  const mitem1 = "AE";
  const mitem3 = "AE";
  const mitem4 = "AE";
  const mitem6 = "SS";
  const mitem7 = "AE";
  const mitem8 = "AE";
  const mitem9 = "AE";
  const mitem12 = "AS";

  //-------------------thickness------------------------//
  const titem1 = 2.0;
  const titem3 = 2.0;
  const titem4 = 2.0;
  const titem6 = "d=5";
  const titem5 = 5.0;
  const titem8 = "5.0";
  const titem9 = "5.0";
  const titem12 = "2.0";
  //---------------------------

  let k1 = frameNumber.slice(0, 9);
  let k4 = frameNumber.slice(0, 9);
  let k7 = frameNumber.slice(0, 9);
  let k8 = frameNumber.slice(0, 9);
  let k9 = frameNumber.slice(0, 9);
  let k11 = frameNumber.slice(0, 9);
  let k12 = frameNumber.slice(0, 9);

  // text.slice(7,13);
  const pitem1 = ` ${k1} 00N`;
  const pitem4 = ` ${k4} 01N`;
  // const pitem7 = ` ${k7} 02N`;
  const pitem8 = ` ${k8} 02N`;
  const pitem9 = ` ${k9} 03N`;
  const pitem12 = ` ${k12} 04N`;

  //  const pitem3=2;
  //  const pitem4=2;
  //  const pitem6=5;
  //  const pitem8=5;
  //  const pitem9=2;
  //  const pitem12=2;

  function i1(f, e, q, m, t) {
    return [f, e, q, m, t];
  }
  var i1 = i1(pitem1, ditem1, qitem1, mitem1, titem1);

  //--------------------1------------------------------
  var item1 = document.querySelector(".item1"); //ok
  item1.textContent = i1[0]; //link

  var ditem33 = document.querySelector(".ditem3"); //ok
  ditem33.textContent = i1[1]; //link

  var qitem111 = document.querySelector(".qitem1"); //ok
  qitem111.textContent = i1[2]; //link

  var mitem11 = document.querySelector(".mitem1");
  mitem11.textContent = i1[3]; //link

  var titem11 = document.querySelector(".titem1");
  titem11.textContent = i1[4]; //link
  // //-------------------------------------------------

  //--------------------2------------------------------

  //----------------------3--------------------------
  var item12 = document.querySelector(".item12"); //ok
  item12.textContent = iteam3; //link

  var ditem32 = document.querySelector(".ditem32"); //ok
  ditem32.textContent = ditem3; //link


  var qitem122 = document.querySelector(".qitem12"); //ok
  qitem122.textContent = qitem3; //link

  var mitem122 = document.querySelector(".mitem12"); //ok
  mitem122.textContent = mitem3; //link

  var titem14 = document.querySelector(".titem14"); //ok
  titem14.textContent = titem3; //link


  var litem11 = document.querySelector(".litem11"); //ok
  litem11.textContent =  Iteem3; //link
 

  //-------------------4------------------------

  var item13 = document.querySelector(".item13"); //ok
  item13.textContent = pitem4; //link

  var ditem33 = document.querySelector(".ditem33"); //ok
  ditem33.textContent = ditem4; //link

  var qitem13 = document.querySelector(".qitem13"); //ok
  qitem13.textContent = qitem4; //link

  var mitem13 = document.querySelector(".mitem13");
  mitem13.textContent = mitem4; //link

  var titem13 = document.querySelector(".titem13");
  titem13.textContent = titem4; //link

  var litem12 = document.querySelector(".litem12");
  litem12.textContent = i4[2]; //link

  //---------------------5--------------------------


  var item14 = document.querySelector(".item14"); //ok
  item14.textContent = iteam5; //link

  var ditem34 = document.querySelector(".ditem34"); //ok
  ditem34.textContent = ditem5; //link

  var qitem14 = document.querySelector(".qitem14"); //ok
  qitem14.textContent = qitem5; //link

  // var mitem122 = document.querySelector(".mitem12");
  // mitem122.textContent = mitem5; //link

  var litem14 = document.querySelector(".litem13");
  litem14.textContent = exFrameLength; //link




  //---------------------6------------------------

  var item15 = document.querySelector(".item15"); //ok
  item15.textContent = iteam66; //link

  var ditem35 = document.querySelector(".ditem35"); //ok
  ditem35.textContent = ditem6; //link

  var qitem15 = document.querySelector(".qitem15"); //ok
  qitem15.textContent = qitem6; //link


  
  var mitem13 = document.querySelector(".mitem13");
  mitem13.textContent = mitem6; //link

  var titem15 = document.querySelector(".titem15");
  titem15.textContent = titem6; //link


  //---------------------7------------------------
  var item16 = document.querySelector(".item16"); //ok
  item16.textContent =iteam7;

  var ditem36 = document.querySelector(".ditem36"); //ok
  ditem36.textContent = ditem7; //link

  var qitem16 = document.querySelector(".qitem16"); //ok
  qitem16.textContent = qitem7; //link


  // var titem16 = document.querySelector(".titem16");
  // titem16.textContent = titem4; //link



  //---------------------8------------------------
  var item17 = document.querySelector(".item17"); //ok
  item17.textContent = pitem8; //link

  var ditem37 = document.querySelector(".ditem37"); //ok
  ditem37.textContent = ditem8; //link

  var qitem17 = document.querySelector(".qitem17"); //ok
  qitem17.textContent = qitem8; //link


  
  var mitem121 = document.querySelector(".mitem121");
  mitem121.textContent = mitem7; //link

  var titem17 = document.querySelector(".titem17");
  titem17.textContent = titem8; //link


  var litem16 = document.querySelector(".litem16");
  litem16.textContent = igs[2]; //link


  //---------------------9------------------------
  var item17 = document.querySelector(".item18"); //ok
  item17.textContent = pitem9; //link

  var ditem37 = document.querySelector(".ditem38"); //ok
  ditem37.textContent = ditem8; //link

  var qitem17 = document.querySelector(".qitem18"); //ok
  qitem17.textContent = qitem8; //link


  // var litem110 = document.querySelector(".litem110");
  // litem110.textContent = mitem8; //link

  var titem18 = document.querySelector(".titem18");
  titem18.textContent = titem9; //link


  var litem17 = document.querySelector(".litem17");
  litem17.textContent = igs[2]; //link

  
  //---------------------10------------------------
  var item19 = document.querySelector(".item19"); //ok
  item19.textContent = iteam10; //link

  var ditem39 = document.querySelector(".ditem39"); //ok
  ditem39.textContent = ditem10; //link

  var qitem19 = document.querySelector(".qitem19"); //ok
  qitem19.textContent = qitem10; //link

//---------------------------------------------------------------

  //---------------------11------------------------
  var item110 = document.querySelector(".item110"); //ok
  item110.textContent = iteam11; //link

  var ditem310 = document.querySelector(".ditem310"); //ok
  ditem310.textContent = ditem11; //link

  var qitem110 = document.querySelector(".qitem110"); //ok
  qitem110.textContent = qitem11; //link
 





  
 //---------------------12------------------------
 var item111 = document.querySelector(".item111"); //ok
 item111.textContent = pitem12; //link

  var ditem311 = document.querySelector(".ditem311"); //ok
  ditem311.textContent = ditem12; //link

  var mitem121 = document.querySelector(".mitem121");
  mitem121.textContent = mitem12; //link

  var qitem111 = document.querySelector(".qitem111"); //ok
  qitem111.textContent = qitem12; //link

  var titem111 = document.querySelector(".titem111");
  titem111.textContent =titem12;

  var litem110 = document.querySelector(".litem110");
  litem110.textContent =il[0];



}
