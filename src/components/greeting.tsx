
type propsName = {
  name: string;
};
//Sending props(single value) to the child component.
export const Greeting = ({ name }: propsName) => { //props
  return (
      <p>
        Hello {name}, Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularized in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
  );
};
interface PersonInfo {
    info: {
      name: string;
      year: number;
    };
  }
//Sending props(object) to the child component.
export const Person = (props: PersonInfo) => {
  return (
      <p>{`${props.info.name} released with angular ${props.info.year}`}</p>
  );
};

interface Technology {
    technology : string,
    year : number
}
interface TechnologyList {
    technologiesInfo :  Technology[]
}
//Sending props(array of objects) to the child component.
export const TechnologistList = (props:TechnologyList) => {
    return (
        <>
        {props.technologiesInfo.map((item, index) => {
            return (
                <p key={index}>{`${item.technology} released in ${item.year}`}</p>
            )
        })}
        </>
    )
}


// Advanced props
interface AdvancedProp  {
    children: string;  // This allows for any valid React content
}
export const Advanced = (props: AdvancedProp) => {
    return <p>{props.children}</p>;
}
// optional type
interface NotificationCount {
    noOfNotification? : number
}
export const Notification = (props:NotificationCount) => {
    let { noOfNotification = 0 } = props
    return (
        <p>{noOfNotification}</p>
    )
}
