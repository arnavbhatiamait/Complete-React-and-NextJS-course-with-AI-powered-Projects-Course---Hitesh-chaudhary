import {ImageResponse} from "next/og";
export const size={
    width: 1200,
    height: 630,
}

export const contentType="image/png";
export default async function Image({params}){
    const {slug} = await params;
    return new ImageResponse(
       ( <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            color: "white",

        }}>
            <div style={{
                fontSize: 60,
                fontWeight: "bold",
            }}>
                {slug}
            </div>
            </div>)
    )
}