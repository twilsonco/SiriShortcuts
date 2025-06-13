const dictionary1 = {
    "apple": "A fruit that is typically red, green, or yellow.",
    "banana": "A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
    "cherry": "A small, round stone fruit that is typically red or black.",
    "date": "A sweet fruit from the date palm tree, often dried and eaten as a snack."
};

const dictionary2 = {
    "banana": "A tropical fruit that is elongated and curved, with soft flesh rich in starch.",
    "date": "A sweet fruit from the date palm, often eaten dried or fresh.",
    "elderberry": "A small dark purple fruit that grows in clusters on the elder tree, often used in syrups and jams."
};

// dict2 overrides dict1
function mergeDictionaries(dict1, dict2) {
    const merged = { ...dict1, ...dict2 };
    return merged;
}

const mergedDictionary = mergeDictionaries(dictionary1, dictionary2);
console.log(mergedDictionary);