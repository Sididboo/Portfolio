import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { IoMdSchool } from "react-icons/io"
import { AiFillStar } from "react-icons/ai"
import { MdWork } from "react-icons/md"

export default function Timeline() {
  return (
    <div className="bg-gray-900">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#4a5568", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #4a5568" }}
          date="2019 - Présent"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            BTS - Services Informatiques aux Organisation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Option Solutions Logicielle et Applications Métiers
          </h4>
          <p>Lycée Eugène Jamot - AUBUSSON - 23200</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#4a5568", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #4a5568" }}
          date="2016 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Adjoint de sécurité
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ministère de l'intérieur
          </h4>
          <p>
            Commissariat de police - Service Police aux frontières - THIONVILLE
            - 57100
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#4a5568", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #4a5568" }}
          date="2015 - 2016"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            BAC PRO - Système Électronique et Numérique
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mentions Assez Bien
          </h4>
          <p>La Briquerie - THIONVILLE - 57100</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#4a5568", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #4a5568" }}
          date="2014 - 2015"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            BEP - CAP - Système Électronique et Numérique
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Baccalauréat professionnel
          </h4>
          <p>La Briquerie - THIONVILLE - 57100</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<AiFillStar />}
        />
      </VerticalTimeline>
    </div>
  )
}
