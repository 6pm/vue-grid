/**
 * collect unique 'fields' from 'collection'
 *
 * @param collection(Array) - in format: [{...}, {...}, ...]
 * @param field(String) - name which need collect
 *
 * @return(Array) - unigue items from collection
 */
export function uniq(collection, field) {
    let unique = [];

    collection.map((item)=>{
        if (!unique.includes(item[field])) {
            unique.push(item[field]);
        }
    });

    return unique
}