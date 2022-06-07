export default function sortResults(results, key) {
    return results.sort((a, b) => a[key].localeCompare(b[key]))
}