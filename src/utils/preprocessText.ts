function preprocessText(text: string) : string {
   return text.split('\n').join('<br />')
}


export {
    preprocessText
}