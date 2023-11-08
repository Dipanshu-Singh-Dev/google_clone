import { useSelector } from "react-redux";
import React from "react";
import variants from "../GlobalVariables/FramerVariants";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlass } from "react-loader-spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageModal from "../GlobalVariables/Modals/ImageModal/ImageModal";
const ImagesResults = () => {
  const { type, search } = useSelector((data) => data);
  let [loading, setLoading] = React.useState(true);
  let [Error, setError] = React.useState(false);
  const [state, setState] = React.useState();
  const [modalOpen, setModalOpen] = React.useState({
    opened: false,
    target: null,
  });
  const handleClose = () => {
    setModalOpen(false);
  };
  React.useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${search}&client_id=G4cAdBioT6BgxlT3WYOmO0dgDuP8R1bDov5fuIEA5SA&per_page=30`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setState(data);
      })
      .catch(() => {
        setLoading(false);
        setError(false);
      });
  }, [search]);
  React.useEffect(() => {
    setLoading(true);
  }, [type, search]);
  return (
    <div layout className="images-container" style={{ padding: "25px 0" }}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen.opened && (
          <ImageModal
            handleClose={handleClose}
            target={modalOpen.target}
            type="image"
          />
        )}
        {/* correcting commit */}
      </AnimatePresence>
      {loading ? (
        <div>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            className="loadingComponent"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 600: 1, 800: 2, 1000: 3 }}
        >
          <Masonry>
            {state?.results?.map((elem) => (
              <motion.img
                onClick={() =>
                  setTimeout(
                    () =>
                      setModalOpen({
                        ...modalOpen,
                        opened: true,
                        target: elem,
                      }),
                    200
                  )
                }
                variants={variants}
                src={elem?.urls?.small}
                style={{
                  margin: "2px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                alt="chal"
                id="123456"
                whileInView="inView"
                whileHover="hover"
                initial="normal"
                whileTap="click"
                className="grid-item"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </div>
  );
};

export default ImagesResults;
