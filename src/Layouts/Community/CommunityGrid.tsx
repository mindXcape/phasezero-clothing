import React from 'react';
import { bigbannerimg, displaypic } from '../../assets';

type Props = {}

function CommunityGrid({ }: Props) {
  return (
    <div className="community__grid__wrapper">
      <div className="grid__post__item">
        <img
          className="community__grid__item__image first__image"
          src={bigbannerimg}
          alt=""
        />
      </div>
      <div className="grid__post__item">
        <img
          className="community__grid__item__image second__image"
          src="https://scontent.cdninstagram.com/v/t51.29350-15/352642049_655550593278091_2676964400428628937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=djBfs2IBDKwAX9gLd1O&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAJ2vuFDL5B8Y3QF2GhdSZt7537lNrFJQga2sD4nJ6zMQ&oe=648F7795"
          alt=""
        />
      </div>
      <div className="grid__post__item">
        <img
          className="community__grid__item__image third__image"
          src="https://scontent.cdninstagram.com/v/t51.29350-15/351453617_1505737326901567_3047504388768435149_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=eROQqAkOrC8AX_072XE&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAxTBrb9aZt99fYZ75lpdldrZZmqTMXhf5CEh0rfklRrA&oe=648F92B4"
          alt=""
        />
      </div>
      <div className="grid__post__item">
        <img
          className="community__grid__item__image forth__image"
          src={displaypic}
          alt=""
        />
      </div>
      <div className="grid__post__item">
        <img
          className="community__grid__item__image fifth__image"
          src="https://scontent.cdninstagram.com/v/t51.2885-15/351147361_787793712815546_7743206724008841251_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=GtaS1hPxmKgAX9TFrc1&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AfBbN9BkYQzw_GaePf3COsdAXqO4C90cUpryRlzbMZklVw&oe=648B4AE3&_nc_sid=045e46"
          alt=""
        />
      </div>
      <div className="grid__post__item">
        <img
          className="community__grid__item__image sixth__image"
          src="https://scontent.cdninstagram.com/v/t51.29350-15/352217316_967607827728415_8079031931959249824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=87N7BOC2huYAX-eR9Wi&_nc_ht=scontent.cdninstagram.com&edm=AL-3X8kEAAAA&oh=00_AfB_WbNUQ2xCxpwgrsxVM9zijhkovjk_z3mOwU03gPZEww&oe=64903D72"
          alt=""
        />
      </div>
    </div>
  );
}

export default CommunityGrid;
