let apg = [];
let alternate_pgp = [];

apg[4] = "acmeammokiwiorcaOhiosoloZulu";
apg[5] = "adultaheadAlgolallowaloneappleatlasAztecbanjobisoncobracubicedictendowerasemeritmisermuralmusicopticPlutopupilpuppyquotarepaysugartalontigertonictumorunifyuncutupsetvaporvirus";
apg[6] = "absurdaccrueadriftalkaliamuletApolloartistassumeAthensbaboonbuttoncementchiselDakotacrankyDuponteatingEskimoenlistexodusescapeexceedfacialGeigerhamlethockeyislandindigoklaxonlocalelockupminnowMohawkobtuseMedusapaydaypeachyprefernebulapythonquiverreformregainrewardrhythmrobustrockerscenicpotatoselectshadowrecipespigotstormytissuetraumaTrojantunneltycoonunwinduprootupshotVulcanwafflewalletwillow";
apg[7] = "adviserafflictaimlessantennaarticleancientautopsyBabylonbeamingbedlampbeehivebeeswaxbravadoBelfastberserkCamelotbombastcaravanbreakupcertifyBurbankChicagobuzzardchattercompanycheckupchokingchopperclassiccleanupconcertcowbellcrucialdecimalcrusadedogsleddragnetdisabledrifterdropperdrunkeneggheadendorseexaminefinickyforeverfalloutflytrapgetawayfreedomgravitygazelleglitterglucosegogglesgremlinindoorsindulgeinverseimpetusinvolvejawboneinertiainfancykickoffinfernoJamaicaJupiterleprosyNeptunelibertynewbornOaklandoffloadmegatonmiracleMontanaprinterprowlerOctoberopulentragtimeOrlandoratchetrebirthPacificPandorarematchparagonretouchrevengePegasusribcageruffledsawdustpioneerseabirdpubertypyramidskydiverecoversnowcapreplicasoybeanspanielrevenuerevivalspindlestaplersweltertacticstobaccotempesttorpedotopmosttrackertransittroubleunicornunravelunearthvacancyvertigovisitorvillagevoyagerWichitawaysideWyomingYucatan";
apg[8] = "aardvarkalmightyasteroidAtlanticbarbecuebifocalsbackwardBradburybefriendbilliardblockadebluebirdbrackishCherokeecommandocommencecrucifixcustomercrowfootDecembercrumpleddetectordeadboltdictatordeckhanddinosaurdrainagedreadfuldocumentdrumbeatembezzledwellingequationescapadeeverydayfilamenteyeglasseyetoothflagpolegadgetryflatfootfractureglossarygossamergraduatefrightenHamiltongoldfishguidancehesitatehideawayholinesskeyboardIstanbulnecklacemaritimemaverickpheasantphysiquemisnomermolassesmoleculeprecludemonumentmosquitoquadrantonlookerpandemicreindeerpedigreeringboltpharmacyphoneticsailboatscallionpositiveScotlandsentenceshamrockshowgirlskullcapquantityslowdownsnaplinesnapshotresistorspheroidrevolverspyglasssardonicSaturdaystagnatesavagerystairwaystandardsociablesouvenirsterlingstockmansurmountsuspensesympathytapewormtomorrowtravestyultimateuniverseupcomingvagabondVirginiavocalistwarrantyWaterloowoodlark";
apg[9] = "aftermathaggregateamusementapplicantarmisticebackwaterbackfieldbodyguardBrazilianbreakawaybutterfatblackjackcandidateblowtorchCapricornbookshelfcaretakercelebratebreadlinecellulosebrickyardbriefcaseclergymancoherencechairliftcomponentChristmasclamshellconsensusclassroomcorporatecorrosionclockworkcrossovercrackdowndecadencedesigningdetergentdashboarddeterminedirectiondisbeliefequipmenteightballexistencefascinatefortitudefrequencyGalvestonframeworkguitaristhamburgerhandiworkhazardoushighchairhurricanehydraulicimpartialinceptioninformantinsincereinsurgentintegrateintentioninventivenightbirdmicrowavemidsummerplayhousepreshrunknarrativeNorwegianparagraphparamountpassengerpenetratepocketfulscorecardprocessorproximatepublisherracketeerslingshotrebellionrepellentsnowslidereproducesouthwardretrievalspearheadspellbindstagehandscavengersensationsteamshipspeculatestopwatchsurrendersweatbandtelephonetherapisttolerancetraditiontruncatedtreadmillundauntedunderfootwhimsicalwatchword";
apg[10] = "adroitnessatmospherebooksellerborderlinebottomlessBurlingtoncannonballcombustionconcurrentconfidenceconformistcongregateconsultingcouncilmancumbersomedisruptivedistortionenchantingenrollmententerpriseheadwatershemisphereletterheadmatchmakermicroscopenewsletteroutfielderperceptivephotographpolitenessprovincialresponsiveretractionretrospectsandalwoodspecialiststupendoussupportivesuspicioustambourinetrombonisttypewriterWilmingtonyesteryear";
apg[11] = "belowgroundbusinessmanchambermaidmillionairepaperweightperformancestethoscope";

for (let i = 4; i < 12; i++) {
    for (let j = 0; j < apg[i].length; j+= i) {
        alternate_pgp.push(apg[i].substr(j, i));
    }
}
