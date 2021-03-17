import React from 'react'
import Header from "./Header"
import "./Body.css"

function Body({spotify}) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img
                    src="https://newjams-images.scdn.co/v2/discover-weekly/ST82T7Hwk0lXM3D3iVsOXNjRHDmChdjijk5k_nl1He07TGrvVENroJ_XqMnbeYWYFU6Nqynzvw4lEKNFmp8cyuxw4ck5I6viH2-AOrNnCAv71GzU4BeECJPjLy3gyhqDiE0hJqtFWhlvIJP0bm9tzRNRR1xepqNpIz-m2UXzSCS5fbT8CV6Mr4tZd4YLp433k_sb6iNGkf6pbiWggBNtxxBwK-i8yvrjqcaHm23RtIVb_Md84lkPfTCKPJwFMdb7dWHjAtrAgBxEI6nzhTC68BHoqEbZL4i9OS4o7ToooT16DtXDcSuImB_7Z5yeInnoGtcQCtFAZq8rW8S0PjRyCg==/MTA6MjM6ODFUOTEtMDEtMA==/default"
                    alt="" 
                />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description........</p>
                </div>
            </div>
        </div>
    )
}

export default Body
