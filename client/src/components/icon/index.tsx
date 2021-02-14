import { useState, useEffect } from 'react';

interface IIconProps {
  name: string;
  classes?: string;
}

const Icon = ({ name, classes }: IIconProps) => {
  const [IconElement, setIconRender] = useState({ Icon: '' });

  useEffect(() => {
    let isSubscribed = true;
    const getIcon = () => {
      const { default: Icon } = require(`./${name}`);
      if (isSubscribed) setIconRender({ Icon });
    };

    getIcon();

    return () => {
      isSubscribed = false;
    }
  }, [name]);

  return (
    <i className={classes} data-testid='icon'>
      {IconElement.Icon && <IconElement.Icon />}
    </i>
  );
};

export default Icon;