"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const wrapperStyle = {
    minWidth: '5em',
    minHeight: '4em'
};

const keyStyle = {
    minWidth: '5em',
    minHeight: '1em'
};

const valueStyle = {
    minWidth: '5em',
    minHeight: '1em'
};

const colStyle = {
    maxWidth: '8em',
};

export interface Attrib {
    name: string,
    value: any
}

export function Attribute({ name, value }: { name: string, value: string }) {
    return (
        <div style={wrapperStyle}>
            <div style={keyStyle}>{name}</div>
            <div style={valueStyle}><small className="text-muted">{value}</small></div>
        </div>
    );
};

export function AttributeCol({ attributes }: { attributes: Attrib[] }) {
    return (
        <Col style={colStyle}>
            {attributes.map(function (attrib, i) {
                return (
                    <Attribute key={attrib.name} name={attrib.name} value={attrib.value} />
                );
            })}
        </Col>
    );
}

export function AttributeContainer({ attributes }: { attributes: Attrib[][] }) {
    return (
        <Container>
            <Row>
                {attributes.map(function (attribCol, i) {
                    return (
                        <AttributeCol key={"acol-" + i} attributes={attribCol} />
                    );
                })}
            </Row>
        </Container>
    );
}