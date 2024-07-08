function longest(s1, s2) {
    const conjuntoSet= [...new Set(s1), ...new Set(s2)]
    const newValues = new Set(conjuntoSet)
    return Array.from(newValues).sort().join('')
}
