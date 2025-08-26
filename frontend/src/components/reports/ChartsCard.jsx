import React from 'react'
import { Card, CardTitle, CardContent } from "../ui/card";

const ChartsCard = ({ children, title }) => {
    return (
        <Card>
            <CardTitle>
                {title}
            </CardTitle>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default ChartsCard