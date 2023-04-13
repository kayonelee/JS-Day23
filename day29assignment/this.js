let photoSlideShow = {
    photoList: ["portraitPhoto1","couplePhoto2", "childrenPhoto3", "familyPhoto4"],  // ------names of photos
    currentPhotoIndex: 0,   // ------integer currently displayed at 0
    nextPhoto: function()   {
        if (this.currentPhotoIndex <= this.photoList.length-1)    {
            this.currentPhotoIndex++;
                console.log(this.photoList[this.currentPhotoIndex]);
            } 
            else {
                console.log("End of slideshow"); // -----Otherwise log end of slideshow
            }
    },
    prevPhoto: function ()  {   
        if (this.currentPhotoIndex > 0)    {  // ----reverse from above 
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
            } 
            else {
                console.log("End of slideshow");
            }
    },
    getCurrentPhoto: function ()    {
        return this.photoList[this.currentPhotoIndex]   // --returns the current photo from the list.
    }
};
console.log("This is the Current photo:  " + photoSlideShow.getCurrentPhoto());

photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();

photoSlideShow.prevPhoto();