<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/outlines">
        <html>
            <link rel="stylesheet" type="text/css" href="outlines.css" />

            <body>
                <div class="outlines-title"><xsl:value-of select="@title"/></div>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="//definition">
        <div class="definition">
                    <xsl:value-of select="."/>
        </div>
    </xsl:template>

    <xsl:template match="//types">
        <ul>
            <xsl:for-each select="type">
                <li>
                    <xsl:value-of select="."/>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>

    <xsl:template match="section">
        <div class="section">
            <div class="section-title">
                <xsl:value-of select="@title"/>
            </div>
            <div class="section-body">
                <xsl:apply-templates/>
            </div>
        </div>
    </xsl:template>

    <xsl:template match="//list">
        <div class="section">
            <xsl:if test="@title">
            <div class="list-title">
                <xsl:value-of select="@title"/>
            </div>
            </xsl:if>
            <ul>
                <xsl:for-each select="item">
                    <li>
                        <xsl:value-of select="@title"/>
                        <xsl:apply-templates/>
                    </li>
                </xsl:for-each>
            </ul>
            <xsl:if test="@comment">
                <div>
                    <xsl:value-of select="@comment"/>
                </div>
            </xsl:if>
        </div>

    </xsl:template>
    <xsl:template match="p">
        <p>
                - <xsl:apply-templates/>
        </p>
    </xsl:template>

</xsl:stylesheet>