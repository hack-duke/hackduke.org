const IconTextButton = ({
    text,
    icon,
    textColorHex,
    bgColorHex,
    extraClasses,
    onClick,
}) => {
    return (
        <div
            className={`button ${bgColorHex ? "bg-[" + bgColorHex + "]" : ""} ${
                textColorHex ? "" : "text-hd-dark-blue hover:text-hd-dark-blue"
            } p-0 text-xl ${extraClasses ? extraClasses.join(" ") : ""}`}
            onClick={onClick}
            style={
                textColorHex
                    ? {
                          color: textColorHex,
                      }
                    : {}
            }
        >
            {text} {icon}
        </div>
    );
};

export default IconTextButton;
