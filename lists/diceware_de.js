let dde = [];
let diceware_de = [];

dde[1] = "!#%&()*+-:;=?@$0123456789abcdefghijklmnopqrstuvwxyz\"";
dde[2] = "!!##%%()**++--:(:)==??$$101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899aaabacadaeafagahaiajakalamanaoapaqarasatauavawaxayazbbbcbdbebfbgbhbibjbkblbmbnbobpbqbrbsbtbubvbwbxbybzcbcccdcecfcgchcicjckclcmcncocpcqcrcsctcucvcwcxcyczdbdcdddedfdgdhdidjdkdldmdndodpdqdrdsdtdudvdwdxdydzebecedeeefegeheiejekelemeneoepeqereseteuevewexeyezfbfcfdfefffgfhfifjfkflfmfnfofpfqfrfsftfufvfwfxfyfzgbgcgdgegfggghgigjgkglgmgngogpgqgrgsgtgugvgwgxgygzhbhchdhehfhghhhihjhkhlhmhnhohphqhrhshthuhvhwhxhyhzibicidieifigihiiijikiliminioipiqirisitiuiviwixiyizjbjcjdjejfjgjhjijjjkjljmjnjojpjqjrjsjtjujvjwjxjyjzkbkckdkekfkgkhkikjkkklkmknkokpkqkrksktkukvkwkxkykzlblcldlelflglhliljlklllmlnlolplqlrlsltlulvlwlxlylzmbmcmdmemfmgmhmimjmkmlmmmnmompmqmrmsmtmumvmwmxmymznbncndnenfngnhninjnknlnmnnnonpnqnrnsntnunvnwnxnynzobocodoeofogohoiojokolomonooopoqorosotouovowoxoyozpbpcpdpepfpgphpipjpkplpmpnpopppqprpsptpupvpwpxpypzqbqcqdqeqfqgqhqiqjqkqlqmqnqoqpqqqrqsqtquqvqwqxqyqzrbrcrdrerfrgrhrirjrkrlrmrnrorprqrrrsrtrurvrwrxryrzsbscsdsesfsgshsisjskslsmsnsospsqsrssstsusvswsxsysztbtctdtetftgthtitjtktltmtntotptqtrtstttutvtwtxtytzubucudueufuguhuiujukulumunuoupuqurusutuuuvuwuxuyuzvbvcvdvevfvgvhvivjvkvlvmvnvovpvqvrvsvtvuvvvwvxvyvzwbwcwdwewfwgwhwiwjwkwlwmwnwowpwqwrwswtwuwvwwwxwywzxbxcxdxexfxgxhxixjxkxlxmxnxoxpxqxrxsxtxuxvxwxxxyxzybycydyeyfygyhyiyjykylymynyoypyqyrysytyuyvywyxyyyzzbzczdzezfzgzhzizjzkzlzmznzozpzqzrzsztzuzvzwzxzyzz";
dde[3] = "!!!###%%%***+++---:-(:-)===???$$$100101111123200222234300333345400444456500555567600666678700777789800888900999aaaaalaaoaasabbabcabfabkaboabsabtabuachadeadjadmadnadradvahaahnakaaktallalmalpalsaltamaamiamtanhankanlanmansapoappardarharmartassastatmaueaufausaxtbadbarbatbaubbbbcdbdebeibesbevbezbgbbghbhfbinbipbisbitblzbmwbndboabobborboxbrdbrtbsebspbubbugbusbzwcadcaicamccccdecduchrcimcmÑcnccsudagdardasdddddrdefdemdendeoderdesdfbdgbdgldgrdiadiedindipdirdjhdkpdomdondozdpadrgduodurebdedveeeefgeheeideineisekdekgelfembendengerberwerzesaessewiewsezbfadfamfanfaofaxfbifdpfeeffffghfigfrlfrzgabgaggapgargasgebgehgekgengesgewgezggfgggghigibgingnugongpsgsmgutgvphabhaihathauhbfheuhhhhijhinhithivhobhofholhubhufhutiaoiceichihfihkihmihnihriiiijkinginhinsiodiokioniraireirkisoistiwfjhvjjjjkljobjodjurkaikamkapkfmkfzkkkklmklokotktokuhkurlablaglaslaulebledleelfdlfglidlkwllllmnloblogloslotltdltgludlugluvluxmadmagmaimalmanmaxmbhmdbmdlmetmezmfgminmiomirmitmmmmnomodmolmopmrdmtlmusmutnahnegneunewngonienilnixnnnnopnotnpdnunnurnutoasobbodeoffoftohgohmohromaoooopaopqortostpapperpfdpikpinpktpkwplyplzpolpopppappppqrpropstqkmqqqqrsradrahrarratrauredregrehrelrenrepriorohromrotrrrrstrufrumsahsansaosausbbsedseeseisetsieskiso?sogspdsprsrisssstdstrstutagtaltantattauteeteltgltictodtontortotttttuetuntuttuvufauffufoufzuhfuhruhuuieukwulkumsunduniunsunuunvupuusauswuuuuvwvebvglvhfvhsvipvomvonvorvuzvvvvwxwalwarwaswblwegwehwemwenwerwezwhgwhowiewirwogwokwsawtowutwwwwxyxxxxyzyenyyyzarzdfzhdzogztgzugzumzurzuszzz";
dde[4] = "100011111234149215001600170018001900191019201925193019351940194519501955196019651970197519801985199019911992199319941995199619971998199920002001200220032004200520062007200820092010201520202030203520402045205022222345246830003333345640004321444445675000555556786000666667897000777780008888900098769999aaaaabbeaberachtadacadeladeradisaeonaffeagaragioagraahleahmtahntaidsakneakteakutalgealleallgalmaaloealsealsoalteammeamokamoramtlamuranalanisantiantwapiaariearmearztasylatematomauchauflaufsaugeaulaauraautoavisbabybachbackbaerbaffbahnbakubaldbalgballbandbankbarkbartbassbastbaudbaumbautbbbbbebtbeetbeilbeimbeinbelobergbernbetrbettbiasbierbildbiosbissblaubleiblutbockbojebonnboombootbordbossbotebreibriebritbrombrotbrutbubebuchbudebumpbumsbundbuntbussbytebzglcafecalicandcccccebuchefchipchorcmoscodecookcotecoupcvjmdachdadadamedammdankdanndarfdarmdassdatodazudddddeckdeindenkdenndeppderbdiagdichdickdiebdiesdilldingdiplditodivadochdockdohadoofdorfdorndortdosedreidrindtzdduftdummdungduttebbeebeneberechoechteckeecktecmaedeleeeeefeuefreeftaeggeehemeherehreehrteibeeidgeiereileeineeinsekelelanelbeelchelfeelleendeenglengtenteeposerbeerbterdeerleersteselespeesteeszbetatetuietwaetwseuereugheuleeuroevtlewigewwuexilexklexplfachfadefahlfairfaktfalbfallfalzfandfangfarmfarnfasefassfastfaulfaunfaxefddifdgbfegtfehlfeinfeldfellfelsfernfestfetefettfffffickfielfiesfilefilmfilzfingfinkfixtflagflakflauflohflugflurflutfockfolgfondformfortfragfraufreifreufrohfronfrorfuerfugefuhrfundfurtfurzfussgagegalagaltganggansganzgarngastgattgaulgazegebrgeckgegrgehtgeilgeizgelbgeldgerngestgggggibtgiergiftginggipsglasglutgmbhgnomgoldgolfgonggossgottgrabgradgrafgramgrasgratgraugrobgroggrosgrubguamgurtgurugutehaarhabehafthahnhainhakthalbhalfhalmhalshalthandhanfhanghanshartharzhasehasshasthaushauthebtheckheerhefeheilheimheldhellhelmhemdherbherdherrherzheulhexehhhhhiebhierhinghinshinzhirthmmmhochhoerhohehohlhohnholdholmholtholzhonghornhorthosehrsghuhnhundhupehureiataideeidoligeligluihreiiiiinfoinkainkliowairakiranirinirreirrtisbnjadejaehjagdjagtjahrjazzjedejenejhrljjjjjochjogajotajudejulijungjunijurajuryjutekaffkahlkahnkalbkalkkaltkammkannkanukarokatekathkaufkaumkautkauzkeckkeilkeimkeinkekskerlkernkielkieskilokimmkindkinnkinokittkitzkkkkklanklarkleeklonklubklugknieknutkochkodakohlkojekokskomikommkopfkorbkordkorkkornkostkpevkrankrimkrugkubakuerkufekulikultkurskurzkusslackladelagelahmlaiblaielakelammlandlanglaoslasslastlatzlaublauflauslautlavalebelebtleckleerlegtlehmlehrleibleidleimleitlenalenzleonleseliebliedliefliehliesliftligalilalimalistllkwlllllmaalobtlochlodzlogolohnlomeloreloseluegluftlukelupelustluthlyonlyramaatmachmademagdmahlmaidmaismalemalimaltmalzmannmarkmarsmassmastmattmaulmausmeermegamehlmehrmeinmerkmessmichmiefmiesmildmillmilzmimtminemistmitwmixtmmmmmodemoelmofamolemollmondmoormoosmopsmordmostmuffmullmundmusemussmwstmyonnabenachnagtnahenahmnahtnaivnamenanunapfnarrnasanasenassnatonazinchfnchrneidneinneonnervnerznestnettnetzneueneunnietnimmniuenixenmalnnnnnochnormnotenullnussnuukoaseobenoberoboeobstoderodoroecdoedeoeltoeseofenohioohneolivomanomenomskonyxooooopalopecoperopusoralorigorthosloossiovalovumoxidozonpaarpackpadrpagopaktpapapariparkpasspatepattpechpeerpeinpelzpengpermpersperupestpfadpfaupfuiphonpilzpipiplanpluspoetpolepolopompponypopoporeportposepostppppproaprofpuffpulkpulspultpumapunepuntputzqqqqqualquerquizraberaetrageragtrahmrandrangrankrapsrastrateraubraumrautrebereckrederegeregtreifreimreinreisreizrennresprestreueriasriebriefriesriffrigarindringrissristrittritzroberoemroherohrromarosaroserossrostroterotzrrrrruckruftruheruhmruhrruhtruinrundrunerussrutesaalsacksaetsaftsagasagesagosagtsalmsaltsalzsamesamtsanasandsangsanksargsarisasssattsatzsaumsehrseilseinseisseitsekrsektsenfsetzshowsichsiebsiegsiehsimssindsinnsitzskatslamslipslumsmogsnobsodasofasohnsojasoldsollsolosoulspamsparspatspukspurssssstabstarstaustegstetstgbstilstudsturstvosumosundsuvatabutafttagetagstagttakttalgtalktandtangtanktanztaratasttaubtauttaxiteakteerteigteiltermterztesttextthaiticktieftiertipptobttofutogotolltopftopptorftorytotetourtrabtraftrattrautreutrogtrugtttttubatubetuchtuertuevturfturmtuvatypeuawguefauferulmeuminumzuunccundpunepunzeuranurinurneutahuuuuvagevampvasevativchrveneverbverfverhverlversverwviehvielviervogtvolkvollvoltvormvornvorsvvvvwabewachwadewahlwahnwaldwallwandwannwarbwarewarfwarmwattwebtwehewehrwehtweihweilweinweitwelkweltwennwergwerkwertwestwichwie?wiedwienwieswildwindwinkwirdwirrwirtwitzwogewogtwohlwohnwolfwortwozuwundwurfwurmwuxiwwwwxianxmalxxxxyangyardyawlyetiyogayyyyzaehzahlzahmzahnzankzartzaumzaunzebuzehezehnzeitzeltzeugzibozichziehzielzierzimtzinkzinnzinszofezollzonezopfzornzwarzweizzglzzzz";
dde[5] = "aasigabartabbauabendabgasabrufabteiabtunabujaabwegabzglabzugaccraachatachseachteackeracryladanaadelnadeltadleradligadriaaehreaerobaetnaaffigaffinafteragentagrarahmteahnenahnteahornaktenaktieaktivaktoralarmalaunalbumaliasalibialleeallelallemallenallesallzualofialpenalpinaltaialtaralteraltesamberambraammanamollampelamselanbauanbeiangelangerangstankeranmutanodeanrufantikanzugaortaapartapfelaphelapnoeaprilarbokarenaargonarierarmeearmerarmutaromaarscharsenartigarubaascheasiatasienasketaspikastatasteratlasatmenatmetatollaugenauralautoraxialaxiombackebadenbadetbaehtbagelbahreballtbalsabanalbandebangebangtbanjobardebaronbasalbasarbasicbasisbaskebatenbatikbauchbaudebauenbauerbautebayerbebenbebtebeeilbeerebegabbeidebeigebekambelagbelegbelembelltbeludbeninbermeberufbesenbestebetenbetetbetonbeugtbeulebeutebevorbezogbezugbibelbiberbiborbiegtbienebiestbindebingobinombinsebirgtbirkebirnebisambittebiwakblankblaseblassblattblechblickblindblitzblockbloedblondbluffblumebluseblutsbodenboeigboesebogenbohlebohnebombebongobonusboraxbowleboxenboxerbozenbrandbrauebraunbrautbravobrettbriefbriggbrisebritebruchbrustbuchebuchtbuerobuettbullebunnybursabuschbusenbussecacheccittcdromchaoschilechilichinachipschlorchromclaimclogscodeccomiccostacrashdabeidachsdaenedaherdakardamendamitdampfdandydankedanktdarandarindarumdateidatendativdatumdauerdaunedavaodavondavordeckedecktdegendehntdeichdeinedeistdekandekordelledemutdenktdepotderendestodevondevotdhakadiaetdichtdickedieledientdiesedildodiodedipoldirnediwandochtdockedoestdoggedohledolchdoldedonaudopendosisdozerdrahtdralldramadrangdreckdrehtdrelldriftdrilldrogedropsdruckdruseducktduelldueneduennduerrdueseduettdumasdummedumpfdunstdurchdurstebeneebneneckigedwinehernehrenehrteeicheeidameideseifereigeneigtleileneiligeimereinemeineneinereineseinsteiseneisigeiteleiterekeltekligekzemelendelfteeliteemailemporemsigendenendetengelengerengesengteenkelenormenzymerbaterbinerboterbseerdenerdigergaberhoberkerernsternteersteescheessayessenesseressigetageethiketwaseuterevoliewigeexaktextrafabelfadenfahnefahrtfakirfalkefallefallsfaltefalztfamosfanalfaradfarbefasanfaserfassefasstfatalfaunafaustfazitfederfegenfehdefehltfeierfeigefeilefeindfeinefelgefernefersefeschfestefetenfettefeuerfibelfidelfigurfiletfilmefinnefintefirmafischfitisfixenfixerfixtefixumfjordflachflameflaumfleckflehtflinkflirtfloezfloraflossflottfluchflugsflukefluorflussfoehnfokalfokusfolgefolgtfoliefopptformtfortsforumfotzefrackfragefragtfrassfreakfrechfreiefremdfreutfriesfristfrohefrommfrontfrostfruehfuchsfuderfuegtfuenffuersfugenfuhrefunkefunktfuriefuzzygabelgabungaelegafftgallegambegammaganzegarbegardegassegattegaudigebengebergebetgebotgeckogegengehengeiergeigegeissgeistgelbegeleegenasgenaugeniegenregenuagenuggenusgernegertegeschgestegettogetueghanagichtgildegimpeglanzglattgleisgleitglichgliedglittglommgnadegneisgossegotikgrammgrandgraphgreengreisgrellgriffgrillgrimmgripsgrollgrossgrubegruengrundgrussguetegummigunstgurkegutenguterhabenhackehackthaelthafenhaferhagelhagenhagerhaitihakenhakighaktehalabhaldehallehallohallthalmehalsehaltehaltshanoihanseharemharfeharkehartehaspehassthastehaubehauchhauenhauerhaupthauteheardhebelhebenhechtheckeheckthefeihefigheideheissheizthelfshellthemmthenneherdehertzherumhessehetzehetztheuerheultheutehielthiesshilfehilfshinabhinkthirsehitzehobbyhobelhockthodenhoehehoerthoffthoherhohesholenholstholtehonighordehorsthosenhotelhuanghuetehukerhumanhumorhumushundehunnehupenhurenhurrahusarhymneiallgidahoidealidiotihnenihrerikoneileusiltisimageimkerimmerimmunimpftindeminderindexinfraingerinneninnerinselintimionenirbilirdenirrenirrigizmirjachtjackejagenjagtejapanjaultjeansjedenjederjedesjemenjenerjetztjilinjinanjohltjointjollejoulejubeljumbojungejungsjuntajuwelkabelkabulkackekaderkaesekaeutkahlekajakkakaokalifkaltekamelkaminkampfkanalkannekantekaperkappakappekaratkardekarrekarstkartekasankassekastekatarkaterkatzekauenkauerkauftkautekebabkegelkehlekehrtkeiftkeiltkeimtkeinekelchkellekeltekeniakerbekerbtkerzeketonkettekeulekiemekiepekimmekippekipptkisteklageklagtklammklangklapsklaueklautklebtkleidkleiekleinklickkliffklimaklotzkluftknabeknallknappknastkneteknickknienknietkniffknopfknutekochtkodexkoelnkohlekokonkolikkometkommakommtkontokonuskopalkopiekorankoreakorfukororkorsekosenkotigkrachkraftkrakekrankkranzkrasskrauskrautkrebskreiskremlkreppkretakreuzkriegkrillkrimikripokrisekrochkronekropfkrummkrungkruppkualakuehlkuehnkugelkundekunstkuriekurvekurzekuttekyyivlabillaborlachelachslachtladenladerlaedtlaermlagerlagoslaichlakailakenlampelangelanzelaotelarvelaschlaserlassolasstlasurlattelaubelaugelaugtlaunelautelebenleberlebstlebtelecktlederledigleedsleereleertlegallegatlegenlegerlegtelehenlehnelehntlehrelehrtleierleiheleihtleimtleineleiselemmalendelenktlepralerntlesbelesenleserletteleutelevellewislichtliebeliebtliegeliegtliessliestlilielillelimbolimeslindelinielinkelinkslinselinuxlipidlippelisteliterlitzelobenlobtelockelocktlodenloessloestloeweloggelogiklohntloipelokallokumloserlotenlotseloyalluchsluegeluffalulltlumenlunchlungelurchluvenluxuslyriklysinmacaumachomachsmachtmackemadigmaehtmaerzmafiamagenmagermagiemahltmahntmainemainzmajormakelmakromalenmalermaltamalvemameymampfmangomaniemankomappemarijmarkemarktmasermaskemassemasstmattemauermauzimedanmeeremeilemeinemeintmeisemeistmekkamelktmengemengtmensamenuemerztmessemetermetromeutemewtumiamimiautmicromienemietemilbemilchmildemilizmimikmimteminorminskminusminzemischmisstmittemixermixtemobilmodalmodemmodermodulmodusmoeblmoesemoewemogulmolkemollemombimonatmonommopedmoralmotelmotivmotormottemottomuedemuehemuellmuffemuhenmulchmuldemumiemungomusikmutigmuttinabelnachmnachtnacktnadelnaehenaehtnaemlnagelnahennamennaominarbenasalnaturnaurunebelnebennecktneffenegerneigtnelkenenntnepalnepptnervtnettoneuerneuesnichtniereniestnietenigernimmtnipptnizzanobelnockenoppenorthnotarnotennotiznudelnuttenylonobereobigeoblagochseockeroedemoelenoeleroeligoelteoffenoffizohchrohrenoktaloktanoliveonkelopferopiatopiumoprofoptikordenorganorgelorgieoringorionorkanortenortetosakaostenotterozeanpaartpachtpacktpafftpaketpalaupalmepampapampepandapanikpannepapelpappepapstpapuaparisparkaparktpartypasstpastepastypatchpaterpatinpatnapaukepausepecanpegelpennepennyperleperthpeterpetitpfahlpfandpfeilpferdpfiffpflugpfotepfuhlpfundphasephloxphnumpillepilotpiniepinnepiratpirolpissepistepizzaplageplagtplaneplattplatzplumpplutopockepokalpolenpolkapolyppopelpornoportoposenposseprahapraiaprallpreisprimaprimeprinzpriseprobeprobtprofiprosaprunkpsalmptosepudelpuderpumpepumpspumptpunktpuppepusanputerputzeputztpyritquaktqualmquarkquarzquastquirlquitoquittquollquoterabatracheradarradauradioradonragenrakelrammeramperanchrangerankerapperaschrasenraserrasserasterasurratenratteraubtrauchrauferauftrauherauperaupyrauterayonrealerechtredenredetreedereellregalregelregenregieregtereibtreichreifereiftreihereihtreimtreinereisereistreiztremisreninrenntrentereprorestereuigreuserevuerheinrhoderieferiegerieserillerinderingtrinneripperisperisseritusritzeritztrobberockyrodenrodeorodetroeterohrerollerollorolltromanromeorondorosigroterrotesrotterougerouterowdyrubelrubinrudelruderrueberueckruederuegtruestrufenruhenruhigruhteruinerumbarumpfrunderupftrupierussesachasachesacktsaeensaegesaegtsaetesagensagtesahntsaintsaitesalatsalbesalbtsaldosalonsaltosalutsalvesalztsamensamoasanftsanktsantasantosatansatinsatyrsaudisauersauftsaugtsaunasaustschafschahschalschamscharschauscherscheuschobschonschorschotschubschuhschursechsseelesegelsegensehensehersehnesehntseideseienseifeseiftseineseitesekteselbeselensemitsenatsenkesennesenseserbesergeserieserinserumservosesamsetzesexteshuntsichtsiebtsiegtsiehesiehtsilbesilursinktsinussiouxsippesirupsisalsitarsittesitztskalaskalpskeetskiffslangslaweslickslumssockesofiasogarsohlesolchsondesonnesonorsonstsooftsorgesorgtsortesossesouthsowassowiespaetspaltspantspassspatzspeckspeerspelzspielspikespionspitzsporesportspottsprayspreuspritspuckspulespundstaatstadtstahlstallstammstandstarkstarrstartstasestaubsteaksteckstehtsteifsteigsteinstelestellstentsternstetsstichstiegstielstierstiftstillstirnstockstoerstoffstolastolzstoppstossstoutstrafstrohstromstuckstufestuftstuhlstummsturmsturzstutesuchesuchtsudansuesssuhlesuitesummesummtsumpfsupersuppesuratsurrtsyrerszenetabaktabortadeltaegutafeltagentakeltalontampatangotankttannetantetanzttapsttariftassetastetatartatentaubetauentaufetaufttauteteeeiteichteilsteilttempotennetenorteuertexasthanhthekethemathesethrontiaratibettickttiefetigertildetilgttimontintetippttiroltischtitantiteltitertittetitustobentobtetoddytokyotolletollttongatonnetonustopastortetotaltotemtotestoxintragetrakttranktraumtrauttrecktreibtrendtreuetriastricktriebtrieltrimmtristtritttrojatropftrosttrotttrotztuelltulpetumortunertunistunkttuntetupelturboturksturnttutenubahnubootudssruebeluebenueberuebleuebteulcusulkigulkusulsanultraumbauumberumgabumwegumzugunartunccduncdfuncrdundcpunfpaunfugungarunhcrunionunmutunopsunruhunrwaunseruntatuntenunteruralturbanvaduzvagalvalinvatervelarvelinvenusvformvideovielevikarvillavinylvipervirusvisumvliesvogelvoilevorabvoranvornevulvawaagewachewachswachtwaerewaffewagenwaleswaltzwalzewammewangewanktwanzewarenwarmewarntwarptwartewarumwarzewatenwattewdhlgwebenweberwebtewedelwederwegenwehenwehrtwehteweichweideweiheweihtweileweintweiseweissweistweitewelchwellewelltwelpewendewenigwerbtwerdewerftwesenwesirwespewessiwestewettewetztwhistwichtwickewiderwiegewiegtwiesewildewillewindewinktwipptwirbtwirftwirktwischwitwewobeiwochewodkawogenwogtewoherwohinwolgawolkewollewomitwonneworanworinworldworteworumwovonwovorwrackwuchswuchtwuestwuhanwulstwundewurdewurstwuschxenonyuccazackezaehlzahltzahntzangezanktzargezarinzaustzebrazechtzeckezederzehrtzeigtzeilezellezelotzenitzerrtzeugezeugtzickeziegezieheziehtzieltziemtziertzinkezitatzitzezivilzobelzogenzonalzonenzoomtzottezuchtzucktzudemzuegezugigzumalzunftzungezupftzurrtzurufzutatzuvorzuzugzwangzweckzweigzwergzwirnzwistzyste";
dde[6] = "aachenabbildabfallabflugabfuhrabgabeabgangabgottabgussabhangabiturabkehrablageablassablaufablautabluftabnormabraumabredeabriebabrissabruptabsageabsatzabschnabsenzabsurdabteilabwehrabwurfacetonachselachtenachtetadagioaddieradelndadelteadenomadischadligeadrettadventadverbaegideaelteraergeraermelaescheaetheraethylaetzenafrikaagiertagonieahndetahnendahnungairbusakazieakeleiakkordakteuraktienaktionaktivaaktiveakutesakzentakzeptalaninalaskaalbernalbertalbinoalkalialleinalltagalraunaltbaualternaltertaltoelambossameiseamnionamoebeamorphanabolanalogananasanatomandereandersandoraanfallanfanganfluganfuhrangabeangaraangelnanginaanglerangolaangussanhandanhangankaraankaufankertanlageanlassanlaufanlautannonaanomalanomieanonymanorakanredeanreizansageansatzansauganschlanshananteilantraganurieanwaltanzahlappellaquanaaraberarbeitarchivarglosarkadearktisarmadaarrestartistarzneiasbestaschigaskeseasmaraaspektastanaasthmaastralataxieathletatmendatmeteatmungatomaratonieatopieatrialatriumattestaufbauaufrufaufzugaugustausbauaushubausrufaussenausserausteraustinauswegauszugautarkautschavaruaazaleeazetatazetonazimutazorenaztekebackenbadetebaehenbaehtebaerinbafoegbaggerbaldigbalkanbalkenbalkonballenballigballonbalsambamakobambusbananebandarbanditbangenbangtebanguibanjulbannerbaotoubarbarbariumbarockbarrenbarschbaryonbasaltbasteibatistbauamtbauartbauendbauschbauxitbayernbayrutbeamtebebautbebendbecherbeckenbedarfbedenkbeehrtbeeiltbefahlbefehlbefielbefugtbefuhrbefundbegabtbegannbegebebegehtbegibtbegingbeginnbegossbegrubbegussbehaltbehautbehebtbehextbeinahbeinigbeiratbeirrtbeirutbeisstbejahtbelebtbelegtbeliehbelizebellenbellerbelltebemassbenahmbengelbenzinbenzolbequemberaetbereitbergabberganbergenberiefberlinberuftberuhtberyllbesagtbesannbesassbesatzbesitzbesserbesterbestnrbesuchbetendbetetebetontbetrafbetragbetratbetrogbetrugbettenbettetbeugenbeugtebeulenbeutelbeutetbewarbbewegtbeweisbezirkbhopalbhutanbiederbiegenbietenbieterbietetbigottbikinibilanzbilbaobildenbilderbildetbilligbimsenbinaerbindenbinderbindetbiogasbionikbisherbismutbissaubissenbissigbistumbitmapbittenbitterbittetbizarrbizepsblaehtblaestblaeueblasenblasigblauerblauesblazerbleibtbleichblendeblindeblitzablondeblosseblueteblumenblutenbluterblutigbochumbockenboddenboehmeboersebogotabohnenbohrenbohrerbolerobolzenbomberbonbonborsteboskopbostonbratenbrauchbreiigbreitebremenbremsebrezelbrillebrokatbronzebruderbruehebrueskbruneibrunstbrutalbruteibruttobuccalbuchenbuchsebuckelbuegelbuehnebuenosbuergebuestebuettebuhlenbukettbunkerbutlerbutterbutzenbypasscabriocarrelceriumchancechargechemiechininchoralchristchuzpechyluscitrinciudadclevercliquecobaltcochincookiecouponcousincuriumcursordachtedackeldaemmtdaemondafuerdaheimdahliedaliandallasdamalsdamastdampftdanachdankendaraufdarausdaseindatongdatteldauerndauertdaumendebuetdeckeldeckendefektdehnendehntedekadedekretdelfindeliktdenisedenkendenkerdentaldenverderartderberdespotdessendetaildeutendeutetdezentdiademdiakondialogdichtedickerdickesdienendienerdienstdientedieseldieserdiesesdiffusdiktatdimmerdingendinghydinkeldioxyddiplomdirektdirndldiskusdistaldisteldiversdoebeldoesendoestedoktordollardominodonnerdopingdoppeldornigdorsaldorschdotterdoualadoubledozentdrachedralledrecktdrehendreherdrehstdrehtedreistdrilltdringtdrittedrobendrohendrontedroschdrucktdruesedublinduckenduckteduebelduengtduenneduerreduftenduftetduftigduldenduldetdumdumdummerdummesdunkelduplexdurbanduschedusseldynamoebensoebonitechterechteseckigeedamereditoreffekteggendegoistehedemehrbarehrendehrlosehrungeicheleicheneiferneiferteifrigeigelbeigeneeigneteilendeilzugeinbaueinbiteineheeinhereinigeeinmaleinradeinsameinsereinwegeinzigeinzugeiserneisteeeiterneiterteitrigekelndekelteelsasselsterelternemblemembryoemesisemiratemporeempyemendendendlosendungenthobentityentkamentsprentzogentzugenzianeozaenepilogepischepocheeponymerbauterbenderbiumerdgaserdoelereiltererbterfanderfolgerfuhrerfurtergibtergusserhalterhebterholterlasserlebterlegterloeserneuterntenernteterogenerotikerrangerregtersannersatzersterersteserwarberwerbessbaressenzetappeetuedeetwaigeunucheuropaewenkeexamenexkursexportexternextremexzessfabrikfackelfaehigfaehrefaehrtfaekalfaellefaelltfaengtfaerbtfaersefagottfahrenfahrerfahrigfaiblefaktenfaktorfalbelfallenfaltenfalterfaltetfaltigfalzenfangenfarbigfarmerfasciafaselnfasertfassenfasstefastenfastetfaulenfaulerfauligfaultefegtenfehlenfehlerfehltefeiernfeiertfeilenfeinerfeinesfelsigfenderferienferkelfernerferratferritfertigfesselfesterfestesfettenfettigfetzenfeuchtfeudalfeuernfeurigfiaskofichtefickenfieberfiedelfiktivfilmenfilmtefilterfilzenfilzigfimmelfinalefinanzfindenfinderfindetfindigfingerfinitefirmenfischefischtfiskusfistelfixendflacheflachsflaggeflakonflammeflankeflauteflegelflehenflehtefleissflicktfliegefliegtflinteflockefloeteflosseflottefluchtfluegefluenzflunkeflusenfoehrefoetalfoetusfohlenfolgenfolgerfolgtefolterfonduefoppenfoppteformalformatformelformenformerformteforschfortanfortsffossilfrachtfraesefraestfragenfragerfragtefrankofransefratzefrauenfreierfreiesfreitefremdefreskofreudefreundfreutefrevelfriedefriertfrischfrisstfrisurfrittefrivolfrorenfroschfruchtfruehefuegtefuehltfuehrtfuellefuelltfuerstfundusfurchefurchtfurierfurzenfushunfusionfusselfutschfutterfuzhougabelngabeltgaehntgaemsegaerengaffengaffergafftegalantgalgengallengalliggalmeigaloppgaltengambiagambitganovegaragegarantgartengattergattingaumengaunergebautgebietgebissgeburtgediehgeduldgeeggtgeehrtgeeiltgeerbtgefahrgefeitgefielgegendgegnergehabtgehaltgehautgehegegeheimgehendgeheulgehirngehoergeholtgehrengehuftgehuptgehweggeigergeiselgeisergeizengeiziggejagtgekautgelagegelanggelassgelbergelbesgeldergelegegelegtgeleitgelenkgelobtgelostgeltengemaltgemeingemuetgemuhtgenagtgenauegenesegenialgenickgeniusgenossgenussgeoeltgeorgegepardgeradegeraetgerastgeraumgerbengerbergeredegeringgerstegeruchgeruhegeruhtgesaetgesagtgesamtgesanggesenkgesetzgesuchgesundgetagtgetautgetobtgeuebtgewagtgewahrgewaltgewandgewanngewebegewebtgewehrgewehtgeweihgewinngewirrgewissgewogtgibbongiebelgierengieriggiertegiesstgiftiggigantgigologimpelgingengipfelgischtgitterglaserglasigglasurglatteglatzeglaubeglaubtgleichgleiteglimmtglobalglobusglockeglosseglotzeglotztgluckeglueckgluehtglurakglycingoetzegokartgoldengondelgospelgrabengraebtgrafikgranatgrandegranitgrannegrapengrasengrasiggratisgrauengrauergravurgreasegreiftgrellegrenzegrenztgriebegriessgrillegringogrinstgrippegrobergrobesgroeltgrossegrottegruenegruessgruftigrungegrunztgruppeguckengueterguetigguineagurrenguyanahaarighackenhackerhacktehaendehaengthaertehaeufthaftenhaftethagelnhagelthaggishakendhalalihalberhalltehalsenhalsighaltenhalterhamlethammelhammerhandanhandelhanfenhantelharareharbinharkenharzenharzighaschthassenhasserhastenhastethastighauendhaufenhawaiihebelnhebendheftenheftetheftigheikelheilenheilerheiligheimatheiratheiserheiterheizenheizerheiztehektarhektikheldinhelfenhelferheliumhemmenhemmtehengsthenkelhenkerheraufherausherbstherdenhereinheringherniaheroldherpesherrinhervorherzasherzigherzoghessenhetzenhetzerhetzteheulenheulteheutighierzuhiesighievenhilfenhimmelhinaufhinaushinkenhintenhinterhippiehirschhitzighmilchhobelnhobelthockenhockerhockeyhocktehoehlehoellehoerenhoererhoertehoffenhofftehoheithohlerholendholzenholzighonoelhopfenhopplahorchthormonhornighortenhortethotkeyhueftehuegelhuellehuellthuelsehuepfthuerdehuetenhueterhuetethuettehumbughummelhummerhungerhurleyhuronehurtighustenhyaenehybridhydridibadanibitakideellidylleimbissimpfenimpfteimportimpulsindienindigoindiumindoreingwerinhaltinlettinnereinnunginsektinsultintaktinterninversirakeriraneririschiritisirlandironieirrealirrendirrtumirrwegisebelislandisomerisotopisraeljaegerjaetenjagendjaguarjaipurjammerjanuarjargonjasminjauchejaulenjaultejawohljawortjemalsjemandjetlagjetsetjettenjiddahjiggerjodelnjodeltjodlerjoggenjohlenjordanjubelnjubeltjuckenjuedinjugendjuliusjumperjungenjungerjungesjunkerjunkiejuristjustizkabinekachelkadenzkadettkaeferkaefigkaeltekaeutekaffeekahlerkahmigkaiserkakadukakteekalbenkalbtekaliumkalkigkalktekalterkalteskamerakammerkanadakandiskannstkanonekanpurkansaskanterkantonkantorkanzelkaolinkapaunkapernkapierkapselkaputtkaratekarbidkarbolkarbonkardexkarrenkarteikartonkasackkasinokasselkastenkationkatodekattunkaubarkauendkauernkauertkaufenkauftekausalkautenkaviarkegelnkeglerkehligkehrerkehrtekeifenkeiltekeimenkeinenkeinerkellerkeloidkennenkennerkenyerkerbelkerbenkerbtekerkerkernalkernigkesselkettetketzerkeuchtkeuschkhulnakieferkieselkigalikinderkippenkipperkipptekirchekirmeskissenkitschkittelkittenkittetkitzelkladdeklaertklagenklagteklampeklappeklapptklasseklauenklauseklauteklebenkleberklebtekleckskleineklemmeklemmtkletteklientklingeklingtklinikklinkeklinktklippeklirrtkloakekloentklonenknacktknaeulknalltknappeknarreknebelknechtkneiftkneipeknetenknickskniendknieteknilchknirpsknoggaknolleknospeknotenknotetknotigknurrtkobaltkoboldkochenkocherkochtekodeinkoederkoenigkoepftkoerntkoeterkofferkognakkoituskojotekokainkokettkokunakolbenkollegkollerkolosskommenkommstkondomkondorkonkavkonntekonsulkonsumkonterkontorkontrakonvexkoppelkordelkordonkorkenkorundkosmoskosovokostenkostetkotzenkrabbekrachtkraehekragenkrallekrampfkrankekraterkratzekratztkraultkrausekreditkreidekreistkrempekressekreterkreuztkrippekritikkroatekroetekrokuskrummekrustekryptakubistkuchenkuebelkuechekuehlekuehltkuekenkuerenkuerzekuerztkuesstkuestekuguarkulanzkulturkummerkumpankumpelkundenkundigkupferkuppelkurarekurbelkurierkurieskurortkursivkurzenkurzerkurzumkuweitlabendlabernlabiallachenlacherlachteladendladunglaehmtlaengelaengslaermtlaesstlaeuftlagernlagertlagunelahorelammenlandenlappenlaptoplarvenlaschelassenlastenlasterlateinlatentlauernlauertlaufenlaugenlaugtelauniglaurielausenlausiglaustelauterlauteslawinelayoutlebendleblosleckenleckerledernleefzeleerenleereslegionleguanlehmiglehnenlehntelehrenlehrerlehrteleicheleichtleidenleiderleidetleihenleimenleinenleiserleisteleitenleiterleitetlektorlenkenlenkerlenktelenzenlerchelernenlernstlerntelesartlesbarlesendlesungletzteleucinliberolibidolibyenlibyerliebenlieberliebesliegenlikoerlineallinearliquorlisboalistetlistiglivedolizenzlobendlochenlochialockenlockerlockteloesenloeserloesteloetenloetetloggialohnenlokalelondonlosbarlosunglotionluandalueckeluegenluftiglulltelumballungenlunkerlupinelusakalustiglymphelyzeummachenmachermachstmachtemadridmaedelmaehenmaehermaehnemaehtemaeklemaennlmageremagernmagertmagnatmagnetmahlenmahltemahnenmahntemajuromaklermakulamalabomalaiemalawimaliermalzigmammonmammutmanamamanausmanchemandatmandelmanegemanganmangelmanilamantelmanualmaputomardermariaemarinemarkenmarkigmarmormaronemarschmartermaschemasernmaserumassigmassivmatrixmatschmauernmauertmaukenmaurermausermazaremedianmedleymeerutmehligmeidenmeidetmeilermeinenmeinermeintemekongmeldenmeldetmelkenmelonemenschmensurmentalmentormergelmerkenmerktemerkurmerlinmessenmessermetallmeteormethanmethylmetiermetrummexikomiauenmiautemiedenmiedermietenmietermietetmietzemikronmilanomilieumimendmimoseminderminutemischtmistelmitosemittagmittelmittenmittigmobilemodellmodernmodrigmoebelmoegenmoehremoenchmogelnmogeltmoldaumolligmomentmonacomonsunmontagmoosigmorastmorbidmordenmorgenmoronimosaikmoskvamoslemmoussemueckemuehlemuenzemuerbemuetzemuffigmuhendmuldexmullahmultanmumbaimundenmuntermurmelmurrenmuscatmuschimuseummuskatmuskelmustermutlosmuttermyelommykosemyopiemyosinmyrrhemyrthemystikmythosnachtsnackennackignacktenaehennaehernaehtenaessenagelnnagendnagoyanagpurnahendnahezunahostnamensnanntenapalmnapolinarbignashiknassaunationnatternebligneckennecktenegridnehmenneiderneigenneigtenektarnennennennerneodymneogenneptunnervennervignervtenesselneubauneunteneuralneuronnevadaniameynichtenichtsnickelnickenniedernierenniesennietenniggerningbonippelnippennischenistennistetnitritniznijnodoesnoetignomadenoniusnordennormalnotrufnougatnoumeanudistnuetzenuetztnullennummernussignutrianutzennutzerobdachobenabobereroberstobjektoblateobwohlodessaoeffneoelbadoelendoffeneoktantoktaveokularopfernopfertoptionorakelorangeordnenordnerordnetoregonorientortungosmiumosmoseosternostseeotitisottawaoviparozelotpaarenpaarigpaartepackenpackerpacktepaddelpaellapaffenpafferpafftepagodepalastpanamapansenpanterpanzerpapayapapierpappelparadepareseparkenparoleparteipartiepascalpassenpassivpasstepastorpatentpatzerpatzigpatztepaukenpausenpavianpedantpelvinpendelpensumpepsinpeptidperserpersonpessarpetruspetzenpetzerpetztepfannepfeifepflegepflegtpfriempfropfpfuschphiolephobiephonemphrasephwertphysikpickelpickenpiepenpiepstpikantpilgerpimentpimmelpinkelpinselpirschplaeneplagenplagteplakatplanenplanetplankeplanteplanumplasmaplatinplatteplatztpleiteplenumplombepluginplumpspockenpodestpodiumpoebelpoesiepogrompolicepollenpollerpolungpomadeponchopontonporoesporreeportalpossenpostenposterpostumpotentpotenzprachtpraegtprahltpralltpraxispreisepreistpressepresstprimelprismaprivatprobenprofanprofilprofitproletprolinprologpromptpropanprositprotonprotztpruedeprueftpseudopsychepudernpueblapueblopuereepuertopuffenpufferpulverpumpenpumptepunktepuristpurpurpustelputschputtenputzenputztepuzzlepyogenpythonquaderquaektquaeltquakenquaktequallequartequeckequellequerabquerenquichequiektquilltquintequittequorumrabattrabatzrabiatrachenrackerradeltradialradiumradiusradlerradwegraechtraeuderaeumtragoutrahmenraichuraketerallyerammenrannteranzenranzigrapierrasantrasendraspelrasselrassigrastenrasterratendrateterationratlosratsamrattanraubenraubterauchtraufenrauherrauschrazziarealesrebellrechenrechterechtsreciferedendredeterednerreederreellereffenreflexreformregbezregelnregeltregentreggaeregimeregionreglerregnenregnetregularegungreibenreichtreifenreiherreihtereihumreinenreinerreisenreisstreistereitenreiterreitetreizenreizterekelnrekeltrekordrekrutrektalrektorrelaisreliefreliktrelingrennenrennerreplikreptilretourrettanrettenretterrettetrevierrezeptrheumariechtriegelriemenriesenriesigriffigrindenrinderringenrinnenrisikorissigritterritualritzelritzenritzterivalerobustrochenrockerrodelnrodeltrodendrodeterodungroehreroemerroetenroeterroetetroggenrohbaurohoelrollenrollerrollteroseaurosinerostenrostetrostigrottetrotzigrouterruandarubrikruckenrudernrudertruecktruegenruegteruehmtruehrtruhendruhigerummelrundenrunzelrupfenrupturrussigrutschsabbatsachensachsesachtesackensacktesadistsaebelsaeendsaegensaegersaemigsaeugtsaeulesaeumtsaeuresafarisafconsaflorsafransaftigsagendsahnigsalamisalbeisalbstsalbtesalinesaloppsalzensalzigsamarasambiasampansamtigsandansandigsandtesankensantossaphirsarkomsatiresattelsaturnsaubersaufensauftesaugensaugtesausensaustescampischabeschachschadeschaemschaftschaleschallschaltscharfschartschatzschaumschautscheckscheinscheitschellschelmschemascherescherzscheutschickschiebschiefschienschiffschildschilfschirmschlafschlagschlauschlufschlugschmalschmusschneeschnurschockschoenschopfschorfschossschottschreischrieschrotschuftschuldschuleschultschundschurzschussschuttschutzschwanschwerschworschwulschwurseancesechseseebadseenotseewegsegelnsegeltseglersegnensegnetsehnigsehnteseichtseidenseidigseiendseifigseilerseinenseinerseitanseitenseitigsekretsektorselberselbstseltensendaisendensendersengenseniorsenkersennersepsisseptumseraphserifesermonsesselsetzeisetzensetzerseuchesexistshalomshantysherpashimmyshirazsichelsichersiebensiebtesiechesiechtsiedensiedetsiegelsiegensiegersiehstsierrasignalsignumsilbensilbersingensinkensinnensinnessinnigsintersiphonsirenesitzenskalarsketchskizzesklaveskleraskopjeskotomslalomsnapinsobaldsockelsoebensofernsofortsoireesolchesoldatsolidesolistsollensollstsolltesommersonatesonettsonnensonnigsopransorbetsorgensorgtesovielsoweitsowjetsowohlsozialspaltespangespannesparensparerspatelspatenspechtspeienspeisespendespermasperresphinxspiessspinalspinatspinnespitalspitzespleensplicesplintsplittsprichsproedsprossspruchsprungspuckespuelespukensputumstabilstakenstangestanzestapelstatikstaturstatusstatutstauenstauerstaupestehenstehersteilestellestelltstelzesteppestepptsterilsteterstetigsteuerstiessstigmastillestilltstimmestimmtstinktstipptstirbtstocktstoertstopftstorchstrafestraffstraftstrahlstrammstrandstrangstrapsstrebestrebtstreikstreitstrengstressstreutstrichstrickstriktstrittstrumastudiestueckstuftestumpfstundestuporstupststutztstyrensublimsubtilsuchensuchersuchtesudelnsuedensuehnesuelzesuendesuessesuesstsuhlensulfatsulfidsulfitsultansummensummersummtesunnitsuperbsurrensydneysymbolsynodesyntaxsyriensystemtabriztabulatadelntadelttadlertaejontaetertaetigtagaustagendtagungtaifuntailletainantaipeitaiwantakelntaklertaktiktalenttalgigtalkumtampontamtamtandemtankentankertanktetannintantaltanzentanztetapetetapfertapsentarawatardivtarnentarntetarocktartantaschetastentastertastettatorttaubentaubsitauchttaufentauftetaugentaumeltauschtbruchteerenteflontehranteigigteilenteilerteiltetellertellurtempehtempeltendertennistensidterminterrortestentestertestetteufeltextertextiltheistthemsethermethreadthrontthymustickentiefertiegeltigristilgentilgtetippentipptetiradetiranatobendtoenentoerintoetentoetettollentolucatomatetombaktonarmtonarttonbadtonikatonlostonsurtophustorinotorlostorwegtotaletoupettrabertrachttraegetraegttraenetragentragiktrampttrancetrapeztrattetraubetrauentrauertraufetraumatrautetreibttremortrennttreppetresortretentreuertriefttriffttrikottrinkttrollttrotzttruebetruebttrumpftruppetschadtshirttucuxituelletuerketugendtundratunikatunktetunnelturbanturnenturnteturtoktuschetuvalutyphusuebenduebersuebriguebungueppigugandaulsterultimoumarmtumfangumfeldumflogumgehtumgibtumgingumhangumkehrumlageumlaufumlautumluftumrissumsatzumweltunctadundankunebenunechtunedelunehreunescounevocunfairunfallunfcccunfeinungarnungernunguteunhchrunheilunicefunicriunidirunklarunklugunliebunreifunreinunrisdunruheunsereunsinnunstetuntereuntermuntieruntreuunwahrunweitunwohlunzahlunzartunzeituranusurformurgenzurinalurlauburlauturteilurumqiurwaldurzeitutopiautopievaetervakuumvalenzvalutavampirvasallvektorvenoesventilverbalverbatverbotvereinvergabverlagverlorverratverrufversenvertanverzugvielenvielesviertevisagevisionvoegelvolantvollervoodoovorausvorbauvordemvorhervorhinvorhofvorhutvorigevorortvorratvorwegvorzugvrumpfvulkanwachenwachstwachtewackerwaegenwaegerwaehlewaehltwaehntwaelztwaendewaerenwaermewaermtwaffelwaffenwaggonwagniswaldigwalkerwalliswalzenwalzerwalztewandelwandtewankenwapitiwappenwarnenwarntewartenwartetwarzigwasserwebendweckenweckerwedelnwehendwehmutwehrteweicheweichtweidenweidetweihteweinenweinteweisenweisseweiterweizenwelchewelkenwellenwelligwendenwendetwendigwerbenwerberwerdenwerfenwerferwermutwertetwertigwessenwestenwettenwetterwettetwetzenwetztewhiskywidderwidertwidmenwidmetwidrigwiederwiegenwiegtewienerwieselwigwamwildeswilligwillstwimperwindeiwindelwindenwindetwindigwinkelwinkenwinkerwinktewinschwinterwinzigwipfelwippenwipptewirbelwirkenwirktewirtinwischtwisentwissenwitwerwitzigwoelbtwofuerwogendwohnenwolkigwollenwolligwolltewonachworaufworauswordenwringtwucherwuerdewuergtwuerzewuestewuetetwunderwunschwurdenwurmigwurzelwusstexbeinexfachexuzhouyangonyuppiezackenzackigzaeherzaehltzaehmtzaehnezaeuntzagrebzahlenzahltezahnenzahntezanderzankenzanktezapfenzappenzasterzauberzausenzaustezechenzecherzechtezehnerzehntezehrenzeigenzeigerzeihenzeilenzeltenzelterzementzensurzephirzepterzerrenzerrtezettelzeugenzeugtezickigziegelziehenzielenziemenzierdezifferzikadezimmerzinderzinkenzinnenzinniezirkonzirkuszirpenzischtzitherzitratzitruszoellezombiezoomtezornigzottigztschrzuckenzuckerzucktezuecktzuegelzuerntzuerstzufallzugabezugangzulagezulaufzuluftzunamezunderzupfenzupftezurrenzusagezusatzzwangszweckezweckszweierzweitezwingtzwirntzwoelfzyanatzyanidzygotezyklonzyklopzykluszypern";
dde[7] = "abdomenabladenahndeteamateuranemoneankunftautogenballadebauzaunbeiwortbelaubtbenenntbiopsiebordellbulloescayennedefizitdessertduesterdysurieeinfacheinheiteinoedeeinzelnergebenerholenethanolfesttagfiedeltflanschfliederfuehrtegammlergedoestgeteiltgetunktglaubengleitenglossarglukosehaeufighaeuserhalbgarheiligeheilunghilfloshinderthoeherehoerbarhuepfteillegalkadaverkleinerknowhowkohortekollegekostuemkruemmtkurioselernendlitauerlockereloetendluftwegluftzuglustlosmeldungmessbarmimischmuellermuendigmusikernukleonpiranhaplagiatpulvertquaeketrammlerrasereiruestensakralesatzbauschiebtschmerzschubersegelndspiegelstelltesteppenstifterstromerstudentstutzensystoletaefelnthiamintokelautraenentriftigversatzvespernvorfallvorlautvormalsweidendwimmernwuehlerwuergerwuerzenzeitgen";

for (let i = 1; i < 8; i++) {
    for (let j = 0; j < dde[i].length; j += i) {
        diceware_de.push(dde[i].substr(j, i));
    }
}
