interface TakePhoto {
  cameraMode: string;
  burst: string;
}

interface story{
    getStory():string

}

// using implements make it mandatory to follow the rules.protocol made in the interface like Takephoto,story
// this brings consistency

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string, 
    public burst: string) 
    {}
}

class YouTube implements TakePhoto,story {
  constructor(
    public cameraMode: string, 
    public burst: string) 
    {}

    getStory(): string {
        return " "
    }
}
