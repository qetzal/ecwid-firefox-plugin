function ecwid_open_url(url) {
var flag = (gBrowser && (gBrowser.mCurrentTab.linkedBrowser&&(gBrowser.mCurrentTab.linkedBrowser.contentDocument.location=="about:blank"))||(!gBrowser.mCurrentTab.linkedBrowser&&(gBrowser.mCurrentTab.label=="(Untitled)")));
if(flag){
    gBrowser.selectedTab=loadURI(url);
}else{
    gBrowser.selectedTab=gBrowser.addTab(url);
}

}
