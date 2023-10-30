import React from "react";
import StoryViwer from "../../Components/StoryComponents/StoryViwer";

function Story() {
  const story = [
    {
      image:
        "https://images.pexels.com/photos/9954174/pexels-photo-9954174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      image:
        "https://images.pexels.com/photos/17059449/pexels-photo-17059449/free-photo-of-wooden-armchair-and-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      image:
        "https://images.pexels.com/photos/17137556/pexels-photo-17137556/free-photo-of-wood-animal-tree-lizard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      image:
        "https://images.pexels.com/photos/17041987/pexels-photo-17041987/free-photo-of-woman-in-traditional-clothing-standing-in-front-of-a-building-with-an-alpaca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div>
      <StoryViwer stories={story}></StoryViwer>
    </div>
  );
}

export default Story;
