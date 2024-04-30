import { Document, Text, Page, StyleSheet, Image, View } from "@react-pdf/renderer";
import cvImage from "../../public/img/cv.jpeg";


const styles = StyleSheet.create({
    page: {
        margin: "0",
        padding: "0",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    section: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    image: {
        width: "140px",
        borderRadius: "100%"
    },
    h2: {
        fontSize: "15px",
        margin: "5px 0px",
        fontWeight: "700",
        color: "#4646a5"
    },
    h3: {
        fontSize: "14px",
        margin: "5px 0px",
    },
    li: {
        margin: "4px 0px",
        fontSize: "13px",
        fontWeight: "100"
    },
    p: {
        margin: "0",
        padding: "2px 0px",
        fontSize: "12px",
        fontWeight: "100"
    },
    date: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        padding: "7px 0px",
    },
    dateCont: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    date1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 3px",
        textAlign: "center"
    },
    secCol: {
        width: "250px",
        height: "100%",
        padding: "3px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#313541",
        color: "#c2c4c7",
    },
    tools: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",

    },
    h1: {
        fontSize: "40px",
        margin: "0",
        padding: "0",
        fontWeight: "100",
        borderBottom: "2px solid black"
    },
    fCol: {
        width: "100%",
        height: "100%",
    },
    fcolcont: {
        padding: "0px 10px",
    },
    ListSkills: {
        fontSize: "12px",
        padding: "4px 0px",
    },
})
function CV() {
    return (
        <Document>
            <Page size={"A4"} style={styles.page}>
                <View style={styles.section}>

                    <View style={styles.fCol}>
                        <Text style={styles.h1}>DARIO MARZZUCCO</Text>

                        <View style={styles.fcolcont}>

                            <Text style={styles.h2}>ABOUT ME</Text>
                            <View style={styles.about}>
                                <Text style={styles.p}>
                                    I'm a web developer and programmer with strong graphic design
                                    skills. I stand out for my analytical skills, problem solving,
                                    creativity and adaptability. I am a dedicated worker, capable of
                                    managing time eciently and working as a team to achieve
                                    common goals. I am committed to continuous learning to open
                                    myself more to the world of programming and in turn to further
                                    polish my skills.
                                </Text>
                            </View>

                            <Text style={styles.h2}>SKILLS</Text>
                            <View style={styles.skills}>
                                <Text style={styles.ListSkills}> • Analysis and Problem Solving </Text>
                                <Text style={styles.ListSkills}> • Creativity</Text>
                                <Text style={styles.ListSkills}> • Dedication to Work</Text>
                                <Text style={styles.ListSkills}> • Adaptability</Text>
                                <Text style={styles.ListSkills}> • Adaptability</Text>
                                <Text style={styles.ListSkills}> • Adaptability</Text>
                                <Text style={styles.ListSkills}> • Collaborative Problem Solving</Text>
                                <Text style={styles.ListSkills}> • Continuous Learning</Text>
                            </View>

                            <Text style={styles.h2}>EXPERIENCE</Text>
                            <View style={styles.exper}>
                                <View style={{ padding: "3px 10px ", fontSize: "15px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Text style={{ color: "#2a2c31", margin: "0 3px" }}><Text style={{ color: "Black" }}>Systemarzz:</Text>Remoto-App Web Developer</Text>
                                    <Text style={{ color: "#6d6d6d", fontSize: "10px" }}>12/2022-Actuality</Text>
                                </View>
                                <View style={{ padding: "3px 10px ", fontSize: "15px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Text style={{ color: "#2a2c31", margin: "0 3px" }}><Text style={{ color: "Black" }}>Integral Design:</Text>Remoto-Template Design & UI/UX</Text>
                                    <Text style={{ color: "#6d6d6d", fontSize: "10px" }}>01/2018</Text>
                                </View>
                            </View>

                            <Text style={styles.h2}>EDUCATION</Text>
                            <View style={styles.educ}>

                                <View style={{ padding: "3px 10px ", fontSize: "15px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Text style={{ color: "#2a2c31", margin: "0 3px" }}>
                                        <Text style={{ color: "Black" }}>Logotipo del comercio Instituto Superior de Design “C.E.P.E.C.” Diseño
                                    Integral</Text>
                                        Rosario-Comprehensive Design
                                    </Text>
                                </View>

                                <View style={{ padding: "3px 10px ", fontSize: "15px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Text style={{ color: "#2a2c31", margin: "0 3px" }}>
                                        <Text style={{ color: "Black" }}>UTN. Universidad Tecnológica Naciona</Text>
                                        Venado Tuerto - Systems Engineering
                                    </Text>
                                    <Text style={{ color: "#6d6d6d", fontSize: "10px" }}>In Progress</Text>
                                </View>

                                <View style={{ padding: "3px 10px ", fontSize: "15px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Text style={{ color: "#2a2c31", margin: "0 3px" }}>
                                        <Text style={{ color: "Black" }}>UTN. Universidad Tecnológica Naciona</Text>
                                        Venado Tuerto - Programming Technician
                                    </Text>
                                    <Text style={{ color: "#6d6d6d", fontSize: "10px" }}>In Progress</Text>
                                </View>


                            </View>
                        </View>
                    </View>
                    {/*  */}
                    <View style={styles.secCol}>

                        <View style={styles.date1}>
                            <Image src={cvImage} style={styles.image} />
                            <Text style={styles.h3}>
                                Web Developer, Programmer, Graphic Designer
                            </Text>
                        </View>
                        {/*  */}
                        <View style={styles.dateCont}>

                            <View style={styles.date}>
                                <Text style={styles.p}>Sarmiento 139</Text>
                                <Text style={styles.p}>Murphy, Santa Fe</Text>
                                <Text style={styles.p}>(+54)9-3462 56-8958</Text>
                                <Text style={styles.p}>drrkmerazyxokv@gmail.com</Text>
                                <Text style={styles.p}>Argentina</Text>
                            </View>

                            <Text style={styles.h2}>TOOLS</Text>
                            <View style={styles.tools} >
                                <Text style={styles.li}> CMD</Text>
                                <Text style={styles.li}> Git</Text>
                                <Text style={styles.li}> HTML/CSS</Text>
                                <Text style={styles.li}> JavaScript/Node</Text>
                                <Text style={styles.li}> TypeScript</Text>
                                <Text style={styles.li}> Python</Text>
                                <Text style={styles.li}> React/Astro/Express</Text>
                                <Text style={styles.li}> Tailwind.CSS</Text>
                                <Text style={styles.li}> SASS</Text>
                                <Text style={styles.li}> Office (Word, Excel, PowerPoint)</Text>
                                <Text style={styles.li}> Figma</Text>
                                <Text style={styles.li}> Adobe Photoshop</Text>
                                <Text style={styles.li}> Corel Draw </Text>
                            </View>

                        </View>
                    </View>
                </View>

            </Page>
        </Document>
    )
}

export default CV;