import Asset from "./asset";
import Name from "./name";
import Types from "./types";
import Moves from "./moves"

function Pokemon(props) {
    return (
        <div className="bg-secondary container">
            <div className="d-flex justify-content-center align-items-center">
                <Name name={props.name} />
                <div>
                    <Asset asset={props.asset} />
                </div>
            </div>
            <div>
                <Types types={props.types} />
            </div>
            <div>
                <Moves moves={props.moves} />
            </div>
        </div>
    )

}

export default Pokemon;