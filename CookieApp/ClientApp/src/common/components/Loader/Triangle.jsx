import { Triangle } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <div>
            {/* <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            /> */}
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
            />
        </div>
    )
}
