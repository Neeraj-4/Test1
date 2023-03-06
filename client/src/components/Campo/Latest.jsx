import React from 'react'

const Latest = ({AllAlbums}) => {
    const HindiAlbums = AllAlbums.filter(album=>album.id==='Hindi');
    console.log(HindiAlbums);
  return (
    <div>
     {HindiAlbums.map((hindialbums)=>(
        <div key={hindialbums.id}>
        <div>
            {hindialbums.albums.map((album)=>(
                <div key={album.id}>
                    <img src={album.albumUrl} alt="album" />
                </div>
            ))}
        </div>
        </div>
     ))}

    </div>
  )
}

export default Latest
