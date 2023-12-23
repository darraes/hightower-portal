"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const wrapperStyle = {
    minHeight: '4em',
};

const keyStyle = {
    minWidth: '5em',
    minHeight: '1em'
};

const valueStyle = {
    minWidth: '5em',
    minHeight: '1em'
};

const invertedWrapperStyle = {
    minHeight: '4em',
    marginRight: '30px',
    marginTop: '10px'
};

const invertedKeyStyle = {
    minHeight: '1em'
};

const invertedValueStyle = {
    minWidth: '3em',
    minHeight: '1em',
    fontSize: '1.4375rem',
    fontWeight: '700',
    lineHeight: '1.25',
};

const colStyle = {
    maxWidth: '8em',
};

export interface Attrib {
    name: string,
    value: any
}

export enum AttribType {
    Default = 1,
    Inverted,
}

export function Attribute({ name, value, type }: { name: string, value: string, type?: AttribType }) {
    if (type == null || type == AttribType.Default) {
        return (
            <div style={wrapperStyle}>
                <div style={keyStyle}>{name}</div>
                <div style={valueStyle}><small className="text-muted">{value}</small></div>
            </div>
        );
    } else {
        return (
            <div className='floatLeft' style={invertedWrapperStyle}>
                <div style={invertedValueStyle}>{value}</div>
                <div style={invertedKeyStyle}><small className="text-muted">{name}</small></div>
            </div>
        );
    }
};

export function AttributeHList({ attributes, type }: { attributes: Attrib[], type?: AttribType }) {
    return (
        <>
            {attributes.map(function (attrib, i) {
                return (
                    <Attribute key={attrib.name} name={attrib.name} value={attrib.value} type={type} />
                );
            })}
        </>
    );
}

export function AttributeRow({ attributes, type }: { attributes: Attrib[], type?: AttribType }) {
    return (
        <Row>
            {attributes.map(function (attrib, i) {
                return (
                    <Col key={attrib.name}>
                        <Attribute name={attrib.name} value={attrib.value} type={type} />
                    </Col>
                );
            })}
        </Row>
    );
}

export function AttributeCol({ attributes, type }: { attributes: Attrib[], type?: AttribType }) {
    return (
        <Col style={colStyle}>
            {attributes.map(function (attrib, i) {
                return (
                    <Attribute key={attrib.name} name={attrib.name} value={attrib.value} type={type} />
                );
            })}
        </Col>
    );
}

export function AttributeBox({ attributes }: { attributes: Attrib[][] }) {
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