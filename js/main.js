var spaces = false;
String.prototype.rtrim = function() {
    return this.replace(/\s+$/g,"");
};

function unicode_warn() {
    if (localStorage.getItem("unicode_warned") === null) {
        document.getElementById("overlay").style.display = "block";
        localStorage.setItem("unicode_warned", true);
    }
}

function set_light_theme() {
    let css = document.styleSheets[0];
    let theme_switcher = document.getElementById("theme_switcher");
    let cells = document.getElementsByClassName("cell");

    theme_switcher.innerText = "Dark Theme";

    for (let i = 0; i < 4; i++) {
        css.deleteRule(0);
    }

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.borderColor = "#000";
    }
}

function set_dark_theme() {
    let css = document.styleSheets[0];
    let theme_switcher = document.getElementById("theme_switcher");
    let cells = document.getElementsByClassName("cell");

    theme_switcher.innerText = "Light Theme";

    if (css.rules[0].selectorText == undefined) {
        css.insertRule("a {color: yellow;}");
        css.insertRule("a:visited {color: orange;}");
        css.insertRule("body {color: white; background-color: black;}");
        css.insertRule("img {filter: invert(1);}");
    }

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.borderColor = "#fff";
    }
}

function swap_stylesheet() {
    let chosen_theme = document.getElementById("theme_switcher").innerText;

    if (chosen_theme == "Dark Theme") {
        localStorage.setItem("theme", "dark");
        set_dark_theme();
    } else if (chosen_theme == "Light Theme") {
        localStorage.removeItem("theme");
        set_light_theme();
    }
}

function get_entropy() {
    return parseInt(document.querySelector("input[name='entropy']:checked").value);
}

function get_source_list(source) {
    let s_list;

    switch (source) {
        case "diceware":
            s_list = document.getElementById("diceware-options").value;
            break;
        case "eff":
            s_list = document.getElementById("eff-options").value;
            break;
        case "alternate":
            s_list = document.getElementById("alt-options").value;
            break;
        case "bitcoin":
            s_list = document.getElementById("bitcoin-options").value;
            break;
    }

    return s_list;
}

function generate_passphrase(source) {
    let s_list = get_source_list(source);

    switch (source) {
        case "diceware":
            generate_diceware(s_list);
            break;
        case "eff":
            generate_eff(s_list);
            break;
        case "alternate":
            generate_alternate(s_list);
            break;
        case "bitcoin":
            generate_bitcoin(s_list);
            break;
    }
}

function sec_rand(count) {
    let min = (-count >>> 0) % count;
    let rand = new Uint32Array(1);
    const crypto = window.crypto || window.msCrypto;

    do {
        crypto.getRandomValues(rand);
    } while (rand[0] < min);

    return rand[0] % count;
}

function generate_pass(len, set, spaces) {
    let pass = "";
    let pass_arr = "";

    if (typeof set == "string") {
        pass_arr = set.split("");
    } else {
        pass_arr = set;
    }

    pass_arr = [...new Set(pass_arr)]; // enforce unique elements in array

    for (let i = len; i > 0; i--) {
        if (spaces) {
            pass += pass_arr[sec_rand(set.length)];
            pass += " ";
        } else {
            pass += pass_arr[sec_rand(set.length)];
        }
    }

    return pass.rtrim();
}

function generate_diceware(selection) {
    let pass = "";
    let wordlist = "";

    switch(selection) {
        case "Basque":
            wordlist = diceware_eu;
            break;
        case "Bulgarian":
            wordlist = diceware_bg;
            break;
        case "Catalan":
            wordlist = diceware_ca;
            break;
        case "Chinese":
            wordlist = diceware_cn;
            break;
        case "Czech":
            wordlist = diceware_cz;
            break;
        case "Danish":
            wordlist = diceware_da;
            break;
        case "Dutch":
            wordlist = diceware_nl;
            break;
        case "English":
            wordlist = diceware_en;
            break;
        case "English (Beale)":
            wordlist = diceware_beale;
            break;
        case "Esperanto":
            wordlist = diceware_eo;
            break;
        case "Estonian":
            wordlist = diceware_et;
            break;
        case "Finnish":
            wordlist = diceware_fi;
            break;
        case "French":
            wordlist = diceware_fr;
            break;
        case "German":
            wordlist = diceware_de;
            break;
        case "Hebrew":
            wordlist = diceware_iw;
            break;
        case "Hungarian":
            wordlist = diceware_hu;
            break;
        case "Italian":
            wordlist = diceware_it;
            break;
        case "Japanese":
            wordlist = diceware_jp;
            break;
        case "Latin":
            wordlist = diceware_la;
            break;
        case "Maori":
            wordlist = diceware_mi;
            break;
        case "Norwegian":
            wordlist = diceware_no;
            break;
        case "Polish":
            wordlist = diceware_pl;
            break;
        case "Portuguese":
            wordlist = diceware_pt;
            break;
        case "Romanian":
            wordlist = diceware_ro;
            break;
        case "Russian":
            wordlist = diceware_ru;
            break;
        case "Slovak":
            wordlist = diceware_sk;
            break;
        case "Slovenian":
            wordlist = diceware_sl;
            break;
        case "Spanish":
            wordlist = diceware_es;
            break;
        case "Swedish":
            wordlist = diceware_sv;
            break;
        case "Turkish":
            wordlist = diceware_tr;
            break;
    }

    let entropy = get_entropy();
    let len = Math.ceil(entropy / Math.log2(wordlist.length));
    let pass_id = document.getElementById("diceware-pass");
    let pass_length = document.getElementById("diceware-length");
    let pass_entropy = document.getElementById("diceware-entropy");

    pass = generate_pass(len, wordlist, true);
    pass = pass.replace(/ /g,"-");
    pass_id.innerText = pass;
    pass_length.innerHTML = "<span>" + pass.length + "</span>" + " characters.";
    pass_entropy.innerHTML = "~" + Math.floor(len * Math.log2(wordlist.length)) + "-bits.";
}

function generate_eff(selection) {
    let pass = "";
    let wordlist = "";

    switch(selection) {
        case "Distant Words":
            wordlist = eff_distant;
            break;
        case "Short Words":
            wordlist = eff_short;
            break;
        case "Long Words":
            wordlist = eff_long;
            break;
        case "Game of Thrones":
            wordlist = eff_gameofthrones;
            break;
        case "Harry Potter":
            wordlist = eff_harrypotter;
            break;
        case "Star Trek":
            wordlist = eff_startrek;
            break;
        case "Star Wars":
            wordlist = eff_starwars;
            break;
    }

    let entropy = get_entropy();
    let len = Math.ceil(entropy / Math.log2(wordlist.length));
    let pass_id = document.getElementById("eff-pass");
    let pass_length = document.getElementById("eff-length");
    let pass_entropy = document.getElementById("eff-entropy");

    pass = generate_pass(len, wordlist, true);
    pass = pass.replace(/ /g,"-");
    pass_id.innerText = pass;
    pass_length.innerHTML = "<span>" + pass.length + "</span>" + " characters.";
    pass_entropy.innerHTML = "~" + Math.floor(len * Math.log2(wordlist.length)) + "-bits.";
}

function generate_alternate(selection) {
    let pass = "";
    let wordlist = "";

    switch (selection) {
        case "Colors":
            return generate_colors();
        case "Elvish":
            wordlist = alternate_elvish;
            break;
        case "English (Deseret)":
            wordlist = alternate_deseret;
            break;
        case "English (Shavian)":
            wordlist = alternate_shavian;
            break;
        case "Klingon":
            wordlist = alternate_klingon;
            break;
        case "PGP":
            wordlist = alternate_pgp;
            break;
        case "RockYou":
            wordlist = alternate_rockyou;
            break;
        case "Simpsons":
            wordlist = alternate_simpsons;
            break;
        case "Trump":
            wordlist = alternate_trump;
            break;
    }

    let entropy = get_entropy();
    let len = Math.ceil(entropy / Math.log2(wordlist.length));
    let pass_id = document.getElementById("alt-pass");
    let pass_length = document.getElementById("alt-length");
    let pass_entropy = document.getElementById("alt-entropy");

    pass = generate_pass(len, wordlist, true);
    pass = pass.replace(/ /g,"-");
    pass_id.innerText = pass;
    pass_length.innerHTML = "<span>" + [...pass].length + "</span>" + " characters.";
    pass_entropy.innerHTML = "~" + Math.floor(len * Math.log2(wordlist.length)) + "-bits.";
}

function is_too_dark(hex) {
    let rgb = parseInt(hex, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >>  8) & 0xff;
    let b = (rgb >>  0) & 0xff;
    let l = (0.299 * r) + (0.587 * g) + (0.114 * b);

    if (l > 79) {
        return false;
    }

    return true;
}

function is_too_light(hex) {
    let rgb = parseInt(hex, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >>  8) & 0xff;
    let b = (rgb >>  0) & 0xff;
    let l = (0.299 * r) + (0.587 * g) + (0.114 * b);

    if (l < 176) {
        return false;
    }

    return true;
}

function generate_colors() {
    let tmp = "";
    let total_len;
    let color_keys = Object.keys(alternate_colors);
    let entropy = get_entropy();
    let len = Math.ceil(entropy / Math.log2(color_keys.length));
    let pass_id = document.getElementById("alt-pass");
    let pass_length = document.getElementById("alt-length");
    let pass_entropy = document.getElementById("alt-entropy");
    let pass = generate_pass(len, color_keys, true).split(" ");
    let chosen_theme = localStorage.theme;

    for (let i = 0; i < len; i++) {
        let hex = alternate_colors[pass[i]];

        if (chosen_theme == undefined) {
            if (is_too_light(hex)) {
                tmp += "<span class='bold light_contrast' style='color:#" + hex + ";'>" + pass[i] + "</span> ";
            } else {
                tmp += "<span class='bold' style='color:#" + hex + ";'>" + pass[i] + "</span> ";
            }
        } else if (chosen_theme == "dark") {
            if (is_too_dark(hex)) {
                tmp += "<span class='bold dark_contrast' style='color:#" + hex + ";'>" + pass[i] + "</span> ";
            } else {
                tmp += "<span class='bold' style='color:#" + hex + ";'>" + pass[i] + "</span> ";
            }
        }
    }

    pass_id.innerHTML = tmp.replace(/> </g, ">-<").rtrim();
    tmp = "";

    for (let i = 0; i < len; i++) {
        tmp += pass[i];
    }

    pass = tmp;
    total_len = pass.length + (len - 1);
    pass_length.innerHTML = "<span>" + total_len + "</span>" + " characters.";
    pass_entropy.innerHTML = "~" + Math.floor(len * Math.log2(color_keys.length)) + "-bits.";
}

function generate_bitcoin(selection) {
    let pass = "";
    let wordlist = "";

    switch (selection) {
        case "Chinese (Simp)":
            wordlist = bitcoin_cn_simp;
            break;
        case "Chinese (Trad)":
            wordlist = bitcoin_cn_trad;
            break;
        case "Czech":
            wordlist = bitcoin_cz;
            break;
        case "English":
            wordlist = bitcoin_en;
            break;
        case "French":
            wordlist = bitcoin_fr;
            break;
        case "Italian":
            wordlist = bitcoin_it;
            break;
        case "Japanese":
            wordlist = bitcoin_jp;
            break;
        case "Korean":
            wordlist = bitcoin_kr;
            break;
        case "Spanish":
            wordlist = bitcoin_es;
            break;
    }

    var entropy = get_entropy();
    var len = Math.ceil(entropy / Math.log2(wordlist.length));
    var pass_id = document.getElementById("btc-pass");
    var pass_length = document.getElementById("btc-length");
    var pass_entropy = document.getElementById("btc-entropy");

    pass = generate_pass(len, wordlist, true);
    pass = pass.replace(/ /g,"-");
    pass_id.innerText = pass;
    pass_length.innerHTML = "<span>" + pass.length + "</span>" + " characters.";
    pass_entropy.innerHTML = "~" + Math.floor(len * Math.log2(wordlist.length)) + "-bits.";
}

function generate_ninja() {
    let pass = "";
    let ninja = ["ka","zu","mi","te","ku","lu","ji","ri","ki","zu","me","ta","rin",
                 "to","mo","no","ke","shi","ari","chi","do","ru","mei","na","fu","zi"];
    let entropy = get_entropy();
    let len = Math.ceil(entropy / Math.log2(ninja.length));

    for (let i = 0; i < len; i++) {
        pass += ninja[sec_rand(len)];

        if (i % 3 == 2 && i != len - 1) {
            pass += "-";
        }
    }

    return [pass, ninja.length, Math.floor(len * Math.log2(ninja.length))];
}

function generate_apple() {
    function _apple(n) {
        /*
            See the Twitter thread at https://twitter.com/AaronToponce/status/1131406726069084160 for full analysis.

            For n ≥ 1 blocks, the entropy in bits per block is:
                log2(
                    (6n-1) *    //  One lowercase alphabetic character is randomly capitalized
                    19^(4n-1) * //  The total possible combinations of consonants
                    6^(2n) *    //  The total possible combinations of vowels
                    10 * 2n     //  An "edge" character is a random digit
                )

            E.G.:
                DVccvc:                      log2( 5 * 19^3  * 6^2 * 10 * 2) ~=  24.558 bits
                cvCcvD-cvccvc:               log2(11 * 19^7  * 6^4 * 10 * 4) ~=  48.857 bits
                cvcCvc-Dvccvc-cvccvc:        log2(17 * 19^11 * 6^6 * 10 * 6) ~=  72.231 bits
                cvccVc-cvccvD-cvccvc-cvccvc: log2(23 * 19^15 * 6^8 * 10 * 8) ~=  95.244 bits
                et cetera, et cetera, et cetera.
        */
        return Math.floor(Math.log2((6*n-1) * 19**(4*n-1) * 6**(2*n) * 20 * n));
    }

    let pass = [];
    let digits = "0123456789";
    let vowels = "aeiouy";
    let consonants = "bcdfghjkmnpqrstvwxz";
    let entropy = get_entropy();
    let n = 1; // number of blocks

    while (_apple(n) <= entropy) {
        n++;
    }

    for (let i = 0; i < n; i++) {
        pass[6 * i]     = generate_pass(1, consonants);
        pass[6 * i + 1] = generate_pass(1, vowels);
        pass[6 * i + 2] = generate_pass(1, consonants);
        pass[6 * i + 3] = generate_pass(1, consonants);
        pass[6 * i + 4] = generate_pass(1, vowels);
        pass[6 * i + 5] = generate_pass(1, consonants);
    }

    let d_loc = 0;
    let c_loc = 0;
    let edge = sec_rand(2 * n); // [0, 2n)
    let digit = generate_pass(1, digits);

    if (edge % 2 == 0) {
        d_loc = 3 * edge;
    } else {
        d_loc = 3 * edge + 2;
    }

    pass[d_loc] = digit;

    do {
        c_loc = sec_rand(pass.length);
    } while (c_loc == d_loc);

    pass[c_loc] = pass[c_loc].toUpperCase();

    for (let i = n - 1; i > 0; i--) {
        pass.splice(6 * i, 0, "-");
    }

    return [pass.join(""), pass.length, _apple(n)];
}

function generate_babble() {
    let pass = [];
    let vowels = "aeiouy";
    let consonants = "bcdfghklmnprstvzx";
    let entropy = get_entropy();
    let v_ent = Math.log2(vowels.length);
    let c_ent = Math.log2(consonants.length);
    let out_ent = (2 * c_ent) + (2 * v_ent);
    let  in_ent = (3 * c_ent) + (2 * v_ent);

    entropy = entropy - (2 * out_ent);

    let len = Math.ceil(entropy / in_ent);
    let tot_ent = out_ent + (len * in_ent) + out_ent;

    for (let i = 0; i < len + 2; i++) {
        for (let j = 0; j < 5; j++) {
            if (j % 2 == 0) {
                pass[(5 * i) + j] = generate_pass(1, consonants);
            } else {
                pass[(5 * i) + j] = generate_pass(1, vowels);
            }
        }
    }

    pass[0] = "x";
    pass[pass.length - 1] = "x";

    for (let i = pass.length; i > 0; i -= 5) {
        pass.splice(i, 0, "-");
    }

    pass.pop(); // strip last "-"

    return [pass.join(""), (len + 2) * 5, Math.floor(tot_ent)];
}

function generate_kpop() {
    // 64 unique words = 6 bits of entropy per word
    let kpop = ["A","Ah","Bae","Bin","Bo","Choi","Chul","Da","Do","Dong","Eun","Gi","Gun","Ha","Hae","Hee",
                "Ho","Hu","Hwa","Hwan","Hye","Hyo","Hyun","Il","In","Ja","Jae","Ji","Jin","Jong","Joo","Joon",
                "Ju","Jun","Jung","Ki","Kun","Kyu","Lee","Mi","Min","Moon","Nam","Ok","Park","Rin","Seo","Seul",
                "Shi","Sik","So","Song","Soo","Su","Sun","Sung","Won","Woo","Ye","Yeon","Yoo","Yu","Yul","Yun"];
    let entropy = get_entropy();
    let len = Math.ceil(entropy / Math.log2(kpop.length));
    let pass = "";

    for (let i = 0; i < len; i++) {
        pass += kpop[sec_rand(len)];

        if (i % 2 == 1 && i != len - 1) {
            pass += "-";
        }
    }

    return [pass, kpop.length, Math.floor(len * Math.log2(kpop.length))];
}

function generate_pseudowords() {
    let ret = [];
    let pseudo = document.getElementById("pseudo-options").value;

    if (pseudo == "Apple, Inc.") {
        ret = generate_apple();
    } else if (pseudo == "Bubble Babble") {
        ret = generate_babble();
    } else if (pseudo == "Secret Ninja") {
        ret = generate_ninja();
    } else if (pseudo == "Korean K-pop") {
        ret = generate_kpop();
    }

    let pass = ret[0];
    let ent = ret[2];
    let pass_id = document.getElementById("pseudo-pass");
    let pass_length = document.getElementById("pseudo-length");
    let pass_entropy = document.getElementById("pseudo-entropy");

    pass_id.innerText = pass;
    pass_length.innerHTML = pass.length + " characters.";
    pass_entropy.innerHTML = "~" + ent + "-bits.";
}

function generate_random() {
    let s = "";
    let entropy = get_entropy();
    let pass_id = document.getElementById("random-pass");
    let pass_length = document.getElementById("random-length");
    let pass_entropy = document.getElementById("random-entropy");
    let option = document.getElementById("random-options").value;

    // ASCII optgroup
    if (option == "Base-94") {
        for (let i = 0; i < 94; i++) {
            s += String.fromCharCode(33 + i);
        }
    } else if (option == "Base-85") {
        s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+-;<=>?@^_`{|}~";
    } else if (option == "Base-64 (+/)") {
        s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/";
    } else if (option == "Base-64 (-_)") {
        s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
    } else if (option == "Base-62") {
        s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (option == "Base-58 (Bitcoin)") {
        s = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    } else if (option == "Base-52") {
        s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (option == "Base-36") {
        s = "0123456789abcdefghijklmnopqrstuvwxyz";
    } else if (option == "Base-32") {
        s = "0123456789abcdefghjkmnpqrstvwxyz";
    } else if (option == "Base-26") {
        s = "abcdefghijklmnopqrstuvwxyz";
    } else if (option == "Base-16") {
        s = "0123456789abcdef";
    } else if (option == "Base-10") {
        s = "0123456789";
    } else if (option == "Base-8") {
        s = "01234567";
    } else if (option == "Base-2") {
        s = "01";
    } else if (option == "Coin Flips") {
        s = "HT";
    } else if (option == "DNA Sequence") {
        s = "ACGT";

    // Unicode optgroup
    } else if (option == "Base-256") {
        unicode_warn();

        s  = "ḀḁḂḃḄḅḆḇḈḉḊḋḌḍḎḏḐḑḒḓḔḕḖḗḘḙḚḛḜḝḞḟḠḡḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺḻḼḽḾḿ";
        s += "ṀṁṂṃṄṅṆṇṈṉṊṋṌṍṎṏṐṑṒṓṔṕṖṗṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮṯṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿ";
        s += "ẀẁẂẃẄẅẆẇẈẉẊẋẌẍẎẏẐẑẒẓẔẕẖẗẘẙẚẛẜẝẞẟẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾế";
        s += "ỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹỺỻỼỽỾỿ";
    } else if (option == "Base-256 (Braille)") {
        unicode_warn();

        // first character is not an ASCII space, but could still break lines
        s  = " ⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿";
        s += "⡀⡁⡂⡃⡄⡅⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚⡛⡜⡝⡞⡟⡠⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼⡽⡾⡿";
        s += "⢀⢁⢂⢃⢄⢅⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢑⢒⢓⢔⢕⢖⢗⢘⢙⢚⢛⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰⢱⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿";
        s += "⣀⣁⣂⣃⣄⣅⣆⣇⣈⣉⣊⣋⣌⣍⣎⣏⣐⣑⣒⣓⣔⣕⣖⣗⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤⣥⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⣽⣾⣿";
    } else if (option == "Base-188 (ISO 8859-1)") {
        unicode_warn();

        for (let i = 0; i < 94; i++) {
            s += String.fromCharCode(33 + i);
        }
        for (let i = 0; i < 95; i++) {
            s += String.fromCharCode(161 + i);
        }

        s = s.replace(String.fromCharCode(173),""); // soft-hyphen isn't graphical
    } else if (option == "Emoji") {
        return generate_emoji();
    }

    let len = Math.ceil(entropy / Math.log2(s.length));
    let pass = generate_pass(len, s);

    pass_length.innerHTML = len + " characters.";
    pass_id.removeAttribute("style"); // from emoji
    pass_id.innerText = pass;
    pass_entropy.innerHTML = "~" + Math.floor(len * Math.log2(s.length)) + "-bits.";
}

function generate_emoji() {
    unicode_warn();

    let entropy = get_entropy();
    let pass_id = document.getElementById("random-pass");
    let pass_length = document.getElementById("random-length");
    let pass_entropy = document.getElementById("random-entropy");
    let len = Math.ceil(entropy / Math.log2(random_emoji.length));
    let pass = generate_pass(len, random_emoji);

    pass_length.innerHTML = len + " characters.";
    pass_id.style.fontFamily = "Emoji";
    pass_id.innerText = pass;
    pass_entropy.innerHTML = "~" + Math.floor(len * Math.log2(random_emoji.length)) + "-bits.";
}
