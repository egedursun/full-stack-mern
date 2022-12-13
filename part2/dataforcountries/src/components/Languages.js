
import Language from "./Language";

const Languages = ({languages}) => {
    return (
        <div>
            {Object.values(languages).map((lang) =>
                <Language key={Object.values(languages).indexOf(lang)} language={lang} />
            )}
        </div>
    )
}

export default Languages