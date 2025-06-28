function doGet(){
    const html = HtmlService.createTemplateFromFile("Index");
    return html.evaluate();

}

function testMessage(message){
    const id = "1hwb5KDwJMTgyjHkoi0_6PhJhu_tnXRmL1sxBO9CsXW8";
    const ss = SpreadsheetApp.openById(id);
    const ws = ss.getSheetByName('Message');
    ws.appendRow([message]);
    return(message)
}
